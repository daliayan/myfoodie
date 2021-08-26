class CreateRestaurants < ActiveRecord::Migration[6.1]
    def change
        create_table :restaurants do |t|
            t.string :name
            t.string :nationality
            t.integer :rating
            t.belongs_to :city, null: false, foreign_key: true
        end
    end
end


