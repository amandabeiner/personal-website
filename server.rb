require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'sinatra/json'
require 'json'
require 'pony'
require 'dotenv'
require 'sendgrid-ruby'

require_relative 'models/project'
also_reload 'models/project'

Dotenv.load
include SendGrid

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/mydb') if production?

get '/api/v1/projects' do
  projects = Project.all
  json projects
end

get '/*' do
  send_file File.expand_path('index.html', settings.public_folder)
end

post '/api/v1/contact' do
  data = JSON.parse(request.body.read)
  content_type :json
  status 200

  from = Email.new(email: data['email'])
  to = Email.new(email: ENV['EMAIL'])
  subject = data['subject']
  content = Content.new(type: 'text/plain', value: data['body'])
  mail = SendGrid::Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)

  if response.body.empty?
    parsed_response_body = "success"
  else
    parsed_response_body = JSON.parse(response.body)
  end

  status response.status_code
  json parsed_response_body
end
