import { clerkClient } from "@clerk/express";

// Middleware to check userID and Has Premium Plan
export const auth = async (req, res, next) => {
    try {
        const { userId, has } = req.auth();

        if (!userId) {
            return res.json({
                success: false,
                message: "Unauthorized - No user ID found"
            });
        }

        const hasPremiumPlan = await has({ plan: 'premium' });

        const userObj = await clerkClient.users.getUser(userId);

        if (!hasPremiumPlan && userObj.privateMetadata?.free_usage) {
            req.free_usage = userObj.privateMetadata.free_usage;
        } else {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0
                }
            });
            req.free_usage = 0;
        }
        
        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.json({
            success: false,
            message: error.message
        });
    }
}