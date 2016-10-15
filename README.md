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
```bash
grunt build && rsync -av --delete ./output/* booyah:/home/karlkeefer/public/crazysauce.com/public/
```