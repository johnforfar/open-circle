import { db } from "./db";

export interface UserProfile {
  id: string;
  address: string;
  avatarName: string | null;
  avatarImage: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export async function getUserByAddress(address: string): Promise<UserProfile | null> {
  try {
    const user = await db.user.findUnique({
      where: { address: address.toLowerCase() },
    });
    if (!user) {
      return await db.user.create({
        data: { address: address.toLowerCase() },
      });
    }
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}

export async function updateAvatarName(address: string, avatarName: string): Promise<UserProfile | null> {
  try {
    return await db.user.update({
      where: { address: address.toLowerCase() },
      data: { avatarName },
    });
  } catch (error) {
    console.error("Error updating avatar name:", error);
    return null;
  }
}

export async function updateAvatarImage(address: string, avatarImage: string): Promise<UserProfile | null> {
  try {
    return await db.user.update({
      where: { address: address.toLowerCase() },
      data: { avatarImage },
    });
  } catch (error) {
    console.error("Error updating avatar image:", error);
    return null;
  }
}

export async function updateUserProfile(
  address: string,
  data: { avatarName?: string; avatarImage?: string }
): Promise<UserProfile | null> {
  try {
    return await db.user.update({
      where: { address: address.toLowerCase() },
      data,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return null;
  }
}

export function getUserDisplayName(user: UserProfile | null): string {
  if (!user) return "Anonymous";
  if (user.avatarName) return user.avatarName;
  const address = user.address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

