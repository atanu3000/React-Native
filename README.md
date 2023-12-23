This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

    For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

-   If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
-   If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Publish apk of your application

-   Here's the detail view how to publish your application to [Google Play Store](https://reactnative.dev/docs/signed-apk-android)

-   Publish an apk and install it to your phone :
    -   On Windows keytool must be run from C:\Program Files\Java\jdkx.x.x_x\bin, as administrator.
    ```bash
    keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    ```
    -   Setting up Gradle variables :
   
         1. Place the my-upload-key.keystore file under the android/app directory in your project folder.
         2. Edit the file `~/.gradle/gradle.properties` or `android/gradle.properties`, and add the following (replace ***** with the correct keystore `password`, alias and key password).

         ```bash
         MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
         MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
         MYAPP_UPLOAD_STORE_PASSWORD=*****
         MYAPP_UPLOAD_KEY_PASSWORD=*****
         ```
    -   Adding signing config to your app's Gradle config

         Edit the file android/app/build.gradle in your project folder, and add the signing config

         ```bash
         ...
         android {
            ...
            defaultConfig { ... }
            signingConfigs {
               release {
                     if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                        storeFile file(MYAPP_UPLOAD_STORE_FILE)
                        storePassword MYAPP_UPLOAD_STORE_PASSWORD
                        keyAlias MYAPP_UPLOAD_KEY_ALIAS
                        keyPassword MYAPP_UPLOAD_KEY_PASSWORD
                     }
               }
            }
            buildTypes {
               release {
                     ...
                     # its import to change from debug to release
                     signingConfig signingConfigs.release 
               }
            }
         }
         ...
         ```
    -   Clean the previous gradle data and build the new apk
         ```bash
         # run this command in your project's ./android directory
         ./gradlew clean

         # run this command for build apk
         ./gradlew assembleRelease
         ```

         You can find the `apk` file in the `android\app\build\outputs\apk\release` directory.


# Learn More

To learn more about React Native, take a look at the following resources:

-   [React Native Website](https://reactnative.dev) - learn more about React Native.
-   [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
-   [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
-   [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
-   [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
