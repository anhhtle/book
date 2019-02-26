# DEV
1) open Android Studio. Run AVD.
2) react-native run-android

# to download to android device
1) Connect device via USB
2) Turn on USB debugging in Developer Mode
3) make sure to comment out all expo related lines in App.js
4) react-native run-android

# dev server
https://github.com/anhhtle/books-server

# PROD Prep android
1) generate signed APK: https://facebook.github.io/react-native/docs/signed-apk-android
2) remove default permissions: https://facebook.github.io/react-native/docs/removing-default-permissions
3) load vector icon in thebooksjourney/android/app/build.gradle
   apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
4) build APK; run the following in android folder: ./gradlew assembleRelease
5) connect phone and test in device with (run command at root folder): react-native run-android --variant=release
6) rename APK to: com.thebooksjourney.apk and upload to https://play.google.com/apps/ account