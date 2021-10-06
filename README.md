# SPF-Checker

A nodejs asynchronous server and tcp/ip client for checking Sender Policy Framework DNS records for message authentication.

Start the server on one host.

node SPFserver.js 

Start the client on a separate host with the domain and DNS record as arguments.

node SPFclient.js "xyz.com TXT"

Requires nodejs version >= 15.9.0
