# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_02_084331) do
  create_table "active_storage_attachments", charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8mb4", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "comments", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.bigint "user_id", null: false
    t.text "comment"
    t.boolean "deleteFlag", default: false, null: false
    t.timestamp "deletedAt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "favs", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.bigint "user_id", null: false
    t.boolean "favFlag", default: true, null: false
    t.boolean "deleteFlag", default: false, null: false
    t.timestamp "deletedAt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_favs_on_post_id"
    t.index ["user_id"], name: "index_favs_on_user_id"
  end

  create_table "images", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.string "image_key"
    t.boolean "deleteFlag", default: false, null: false
    t.timestamp "deletedAt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_images_on_post_id"
  end

  create_table "pet_categories", charset: "utf8mb4", force: :cascade do |t|
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pets", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "pet_category_id", null: false
    t.string "name"
    t.string "icon"
    t.text "introduction"
    t.boolean "deleteFlag", default: false, null: false
    t.timestamp "deletedAt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pet_category_id"], name: "index_pets_on_pet_category_id"
    t.index ["user_id"], name: "index_pets_on_user_id"
  end

  create_table "posts", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "pet_id", null: false
    t.string "imageId"
    t.text "caption"
    t.boolean "deleteFlag", default: false, null: false
    t.timestamp "deletedAt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pet_id"], name: "index_posts_on_pet_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "UID"
    t.text "introduction"
    t.string "icon"
    t.boolean "deleteFlag", default: false, null: false
    t.timestamp "deletedAt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "favs", "posts"
  add_foreign_key "favs", "users"
  add_foreign_key "images", "posts"
  add_foreign_key "pets", "pet_categories"
  add_foreign_key "pets", "users"
  add_foreign_key "posts", "pets"
  add_foreign_key "posts", "users"
end
