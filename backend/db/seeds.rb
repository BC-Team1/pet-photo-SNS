# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# pet-category マスターデータ
require "csv"

CSV.foreach('db/csv/pet_category.csv',headers: true) do |row|
    PetCategory.create(
        id: row['id'],
        category: row['category']
    )
end

# users テスト用データ 2人分
User.create(
    name: 'owner1',
    email: 'owner1@mail.com',
    UID: 'SlhEFsnryKVJed4lNxX4g0XwhzI2',
    introduction: 'Here is an introduction to life with dogs, cats, and turtles.',
    icon: 'image1.jpg'
)
User.create(
    name: 'owner2',
    email: 'owner2@mail.com',
    UID: 'yKVJedxX4g04lNXwhzISlhEFsnr2',
    introduction: 'mylife in Monaco with 3 cats!',
    icon: 'image2.png'
)

# pets テスト用データ
Pet.create(
    user_id: 1,
    pet_category_id: 1,
    name: 'choco',
    icon: 'chocoimg.jpg'
)
Pet.create(
    user_id: 1,
    pet_category_id: 2,
    name: 'mochi',
    icon: 'mochiimg.jpg'
)
Pet.create(
    user_id: 2,
    pet_category_id: 2,
    name: 'blanc',
    icon: 'blancimg.png'
)
Pet.create(
    user_id: 2,
    pet_category_id: 2,
    name: 'noir',
    icon: 'noirimg.png'
)

# posts テスト用データ
Post.create(
    user_id: 1,
    pet_id: 1,
    imageId: 1, 
    caption: "I came to the dog run today with Choco!"
)

# images テスト用データ
Image.create(
    post_id: 1,
    image_key: 'choco20221230.jpg'
)

# favs テスト用データ
Fav.create(
    post_id: 1,
    user_id: 2
)

# comments テスト用データ
Comment.create(
    post_id: 1,
    user_id: 2,
    comment: 'cute!'
)

