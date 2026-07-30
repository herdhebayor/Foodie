import connectDB from '@/database';
import User from '@/models/userModel';
import Order from '@/models/orderModel';
import Message from '@/models/messageModel';
import LikedProduct from '@/models/likeProductModel';
import { getSessionUser } from '@/utils/getSessionUser';
import Review from '@/models/reviewModel'



const cacheTTL = 15 * 1000;
const cacheStore = new Map();

function getCache(key) {
  const record = cacheStore.get(key);
  if (!record) return undefined;
  if (record.expires < Date.now()) {
    cacheStore.delete(key);
    return undefined;
  }
  return record.value;
}

function setCache(key, value) {
  cacheStore.set(key, {
    value,
    expires: Date.now() + cacheTTL,
  });
}

function buildCacheKey(prefix, sessionUserId, extra = '') {
  return `${prefix}:${sessionUserId}${extra ? `:${extra}` : ''}`;
}

export async function getCurrentUser() {
  await connectDB();
 const session = await getSessionUser();
  if (!session) {
    return null;
  }

  const cacheKey = buildCacheKey('user', session.userId);
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const dbUser = await User.findById(session.userId).lean();
  const result = dbUser ? JSON.parse(JSON.stringify(dbUser)) : null;
  setCache(cacheKey, result);
  return result;
}

export async function getCurrentUserOrders() {
  await connectDB();

  const session = await getSessionUser();
  if (!session?.userId) {
    throw new Error('Unauthorized');
  }

  const cacheKey = buildCacheKey('orders', session.userId);
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const orders = await Order.find({ user: session.userId }).sort({ createdAt: -1 });
  const result = JSON.parse(JSON.stringify(orders));
  setCache(cacheKey, result);
  return result;
}

export async function getCurrentUserMessages() {
  await connectDB();

  const session = await getSessionUser();
  if (!session?.userId) {
    throw new Error('Unauthorized');
  }

  const cacheKey = buildCacheKey('messages', session.userId);
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const messages = await Message.find({ user: session.userId })
    .sort({ createdAt: -1 })
    .lean();

  const result = JSON.parse(JSON.stringify(messages));
  setCache(cacheKey, result);
  return result;
}

export async function getCurrentUserLikedProducts() {
  await connectDB();

  const session = await getSessionUser();
  if (!session?.userId) {
    throw new Error('Unauthorized');
  }

  const likedProducts = await LikedProduct.find({ user: session.userId })
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(likedProducts));
}

export async function getUserReview(){
  await connectDB()

  const session = await getSessionUser();
  if (!session?.userId) {
    throw new Error("Unauthorized");
  }

  const reviews = await Review.find({ user: session.userId })
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(reviews)) 
}

export async function getCurrentUserOrderById(orderId) {
  await connectDB();

  const session = await getSessionUser();
  if (!session?.userId) {
    throw new Error('Unauthorized');
  }

  const order = await Order.findOne({ _id: orderId, user: session.userId }).lean();
  return order ? JSON.parse(JSON.stringify(order)) : null;
}
