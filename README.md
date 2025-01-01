A short reflective report (300 words, Word document) on the strengths and weaknesses of my app’s architecture


There are several advantages and disadvantages to building a weather app with HTML, CSS, JavaScript and an API from OpenWeather.In my app’s architecture the UI layer is managed properly, which makes the code cleaner and makes it easier to update or improve the app. On the other hand,  A notable weakness of the app’s architecture is its dependence on external APIs. Here's an overview:

Strengths

The use of HTML, CSS and JavaScript with the help of OpenWeatherMap API is easy for new programmers like me, allowing us to quickly create an attractive app. This app can function without significant performance on slower devices or browsers. Without the need for a personal weather database, an API that provides real-time and precise weather data can be utilized. HTML,CSS and JavaScript are well-suited for most browsers, allowing the app to appeal to more users.By using CSS, it is possible to create app-specific user interfaces that are visually appealing. Development costs can be greatly reduced by using free APIs, such as the OpenWeather API. JavaScript allows you to manage API requests, dynamically handle data and improve interactivity.

Weaknesses

However, they are not static and cannot be used on the back end for things like user authentication, preferences saving, or historical data storage.
The use of additional JavaScript or backend frameworks is necessary for more intricate features. In case the API fails or has limits on its rate, such as free tiers that restrict request rates, your application may stop functioning or receive incomplete data. When not equipped with advanced scripting, the app often presents basic weather data and lacks any form of interactivity or personalization. The presence of user accounts, saved locations and push notifications are dependent on other technologies. API keys stored in the frontend (HTML/JavaScript) can be easily accessed and exploited without permission. A significant amount of real-time weather data is displayed by fetching, but it can be slower if performance is not optimized. Getting API data from the internet is a common practice for HTML/CSS apps. Without a backend or service worker, they can't function offline. OpenWeather does not include  data for every city in the world which means my app’s architecture is displayed undefined if the city is not included in the database. 




