package com.codewithmosh.store;

import org.springframework.stereotype.Service;

@Service
public class NotifacationManager {
    private final NotificationService notificationService;

    public NotifacationManager(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void sendNotification(String message) {
        notificationService.send(message);
    }
}
