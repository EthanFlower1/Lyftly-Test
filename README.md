# Lyftly-Test
A small, full-stack javascript application hosted on Heroku that will select the third letter from every word you input as long as you dont add spaces. This project was built as part of my application to LYFT. 


# REST API
Accepts a POST request to the route “/test”, which accepts one argument “string_to_cut”
Returns a JSON object with the key “return_string” and a string containing every third letter from the original string
(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

 Example POST Request: curl -X POST https://calm-cove-28630.herokuapp.com/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
 
