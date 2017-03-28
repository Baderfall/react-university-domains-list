# React university domains list
##### Start
Install [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=InfinityNewtab) plugin.  
`npm start` - start application on http://localhost:3000/
##### How it works
1. At the very start application starts downloading a critical array of only US universities (which goes first in the original array) and an original array of all universities.
2. Critical array downloads and renders first. 
3. When original array is loaded, it replaces the critical array.
4. Then we could work with application without addititonal requests.
