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
    introduction: '犬とウサギと亀を飼っています。',
)
User.create(
    name: 'owner2',
    email: 'owner2@mail.com',
    UID: 'yKVJedxX4g04lNXwhzISlhEFsnr2',
    introduction: '3匹の猫と暮らしています。',
)

# pets テスト用データ
Pet.create(
    user_id: 1,
    pet_category_id: 1,
    name: 'ちょこ',
)

Pet.create(
    user_id: 1,
    pet_category_id: 3,
    name: 'もち',
)

Pet.create(
    user_id: 1,
    pet_category_id: 11 ,
    name: 'ぐら',
)

Pet.create(
    user_id: 2,
    pet_category_id: 2,
    name: 'きなこ',
)

Pet.create(
    user_id: 2,
    pet_category_id: 2,
    name: 'キジ',
)


# posts テスト用データ
Post.create(
    user_id: 1,
    pet_id: 1,
    caption: "ちょこです。"
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

