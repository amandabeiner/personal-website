class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :web_link
      t.string :github_link
    end
  end
end
