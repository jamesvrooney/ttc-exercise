# Node REST server

### To run server from command line
$ node server.js

### To query server in browser
- localhost:3000/repositories?q=javascript
- localhost:3000/repositories?q=java

### TODO
- Responses from GitHub API are paginated (30 per page)
-- This server only handles 1st 30 results. The 2nd interation would handle all results

- Need more error handling & validation
