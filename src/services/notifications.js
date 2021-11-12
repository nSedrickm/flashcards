import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_KEY = '@flashcards_notifications';

// get permissions from device
async function getPermission() {
    const permission = await Notifications.requestPermissionsAsync();
    return permission.granted;
};

// clear notifications
export function clearNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export async function setNotification() {
    try {
        const store = await AsyncStorage.getItem(NOTIFICATION_KEY);
        const data = JSON.parse(store);

        const permission = getPermission();
        if (data === null) {
            if (permission) {
                // cancel existing notifications
                Notifications.cancelAllScheduledNotificationsAsync();

                // custom notification handler
                Notifications.setNotificationHandler({
                    handleNotification: async () => ({
                        shouldShowAlert: true,
                        shouldPlaySound: true,
                        shouldSetBadge: true,
                    }),
                });

                let nextTrigger = new Date()
                nextTrigger.setDate(nextTrigger.getDate() + 1)
                nextTrigger.setHours(20);
                nextTrigger.setMinutes(0);
                nextTrigger.setSeconds(0);

                Notifications.scheduleNotificationAsync({
                    content: {
                        title: 'Mobile Flashcards',
                        body: "Hello, don't forget to study today",
                    },
                    trigger: nextTrigger
                });

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
        }

    } catch (error) {
        console.error(error)
    }
}