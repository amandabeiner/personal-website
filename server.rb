require 'sinatra'
require 'sinatra/json'
require 'json'
require 'pony'
require 'dotenv'
Dotenv.load

get '/*' do
  send_file File.expand_path('index.html', settings.public_folder)
end

post '/api/v1/contact' do
  data = JSON.parse(request.body.read)
  content_type :json
  status 200
  success = { msg: "hello there i am success" }

  Pony.mail to: ENV['EMAIL'],
            from: data["email"],
            subject: data["subject"],
            body: data["body"]

  json success
end
