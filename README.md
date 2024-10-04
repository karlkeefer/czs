# czs
Site generator for crazysauce.com

### Setup and iterate
```bash
npm install -g grunt && npm install && grunt watch
# in another terminal
cd output && python -m SimpleHTTPServer
# visit http://localhost:8000/ in your browser
```

### Deployment

This is on github pages, so just build and commit the outputs.

```bash
grunt build
```
