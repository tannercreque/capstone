# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Destroying scripts..."
Script.destroy_all

puts "Creating scripts..."
Script.create(name:"House Robbery Script", description: "This that and the other thing", image: "...")
Script.create(name:"Misc. Commands", description: "That this and another thingy", image:"...")
Script.create(name:"Forensics", description: "Some things and other stuff and things", image: "...")
