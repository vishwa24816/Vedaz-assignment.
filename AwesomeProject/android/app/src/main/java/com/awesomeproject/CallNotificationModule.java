package com.awesomeproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CallNotificationModule extends ReactContextBaseJavaModule {

    public CallNotificationModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CallNotificationModule";
    }

    @ReactMethod
    public void showCallNotification(String title, String message) {
        // TODO: Implement the custom notification
    }
}
