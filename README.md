
- [✅] The following HTTPS endpoint returns all of a user’s matches in Call of Duty WWII in the last 20 days:
https://profile.callofduty.com/papi-client/crm/cod/v2/title/mw/platform/psn/gamer/smackmeister/matches/days/20
NOTE: You will need to be logged in on https://www.callofduty.com to access. 
Use the above endpoint to create one page React Native app that shows a list of the above data.

- [✅] We expect that you would use a FlatList. No pagination is required.

- [✅] Take a look at the recent-matches-specs.pdf to see what this should look like.

- [✅]You can use the default React Native fonts. The specs just use Arial. RGB color values are provided below.

- [✅] You do not need to make everything pixel perfect. Feel free to eye-ball font-sizes and height/widths so that it at more or less looks like the specifications.

- [✅] Finally, send us the source code or project. Feel free to reach out if you have any questions on any of the instructions.
 

EVALUATION CRITERIA

- [] Your ability to layout elements as shown in the specs and make everything look right (e.g. use flex correctly, position things as shown, trimming long decimal values).

- [] Your overall code organization.

- [] Your ability to construct a FlatList and make an API endpoint call. 
 
# How to run

```
yarn install
```
### iOS

```
cd ios && pod install
```

```
yarn ios
```


### Android
```
yarn android 
```

## Dependencies


This project uses the following third-party dependencies:
    "react-navigation": "^4.0.10", - For Navigation/Header Styling

    //All other libraries are dependencies that react-navigation uses under the hood

    "react-navigation-stack": "^2.0.16"  

   "@react-native-community/masked-view": "^0.1.6",

    "react-native-gesture-handler": "^1.5.3",

    "react-native-reanimated": "^1.7.0",

    "react-native-safe-area-context": "^0.6.2",
    
    "react-native-screens": "^2.0.0-alpha.32",

### Screenshot

<img width="1210" alt="Screen Shot 2020-01-29 at 12 21 48 AM" src="https://user-images.githubusercontent.com/34716202/73344668-9ba2e580-4237-11ea-966a-4928767c6c54.png">
