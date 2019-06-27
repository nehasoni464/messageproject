import webapp2

import json


class MsgHandler(webapp2.RequestHandler):
    def post(self):
        
        messageq = json.loads(self.request.body)
        print messageq
        message = Message()
        message.user = messageq.get('user')
        message.whom = messageq.get('whom')
        message.text = messageq.get('text')
        message.put()
        self.response.out.write("Done")

class MsHandler(webapp2.RequestHandler):
    def get(self):
        
        qry = Message.query().order(-Message.user)
        d=[]
        for x in qry:
            d.append({
                'user': x.user,
                'key': x.key.urlsafe()
            })   
        self.response.out.write(json.dumps(d))

app = webapp2.WSGIApplication([

    # ('/handlers/', MainPage),
    # ('/handlers/submit', Submit),
    ('/handlers/get', MsHandler),
    ('/handlers/save',MsgHandler),
])