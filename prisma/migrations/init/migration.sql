-- CreateTable
CREATE TABLE "roles" (
    "role_id" SERIAL NOT NULL,
    "role_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "grant_date" TIMESTAMP(6),

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_on" TIMESTAMP(6) NOT NULL,
    "last_login" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "blog" (
    "blog_id" SERIAL NOT NULL,
    "title" VARCHAR(50),
    "content" VARCHAR(255),
    "comment_id" INTEGER,
    "created_on" TIMESTAMP(6),

    CONSTRAINT "blog_pkey" PRIMARY KEY ("blog_id")
);

-- CreateTable
CREATE TABLE "comment_photos" (
    "comment_photo_id" SERIAL NOT NULL,
    "small_photo_url" VARCHAR(500),
    "med_photo_url" VARCHAR(500),
    "lrg_photo_url" VARCHAR(500),
    "xl_photo_url" VARCHAR(500),
    "created_on" TIMESTAMP(6),

    CONSTRAINT "comment_photos_pkey" PRIMARY KEY ("comment_photo_id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment_id" SERIAL NOT NULL,
    "content" VARCHAR(255),

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "product_categories" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(255),

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "product_holidays" (
    "holiday_id" SERIAL NOT NULL,
    "holiday_name" VARCHAR(255),
    "holiday_date" TIMESTAMP(6),

    CONSTRAINT "product_holidays_pkey" PRIMARY KEY ("holiday_id")
);

-- CreateTable
CREATE TABLE "product_more_detail" (
    "more_detail_id" SERIAL NOT NULL,
    "product_type" VARCHAR(250),
    "product_style" VARCHAR(250),
    "shipping_price" INTEGER,
    "size" VARCHAR(250),
    "quantity" INTEGER,
    "ready_to_ship" BOOLEAN,
    "color" VARCHAR(250),
    "customize_able" BOOLEAN,

    CONSTRAINT "product_more_detail_pkey" PRIMARY KEY ("more_detail_id")
);

-- CreateTable
CREATE TABLE "product_occasions" (
    "occasion_id" SERIAL NOT NULL,
    "occasion_name" VARCHAR(255),

    CONSTRAINT "product_occasions_pkey" PRIMARY KEY ("occasion_id")
);

-- CreateTable
CREATE TABLE "product_photos" (
    "product_photo_id" SERIAL NOT NULL,
    "small_photo_url" VARCHAR(500),
    "med_photo_url" VARCHAR(500),
    "lrg_photo_url" VARCHAR(500),
    "xl_photo_url" VARCHAR(500),
    "created_on" TIMESTAMP(6),

    CONSTRAINT "product_photos_pkey" PRIMARY KEY ("product_photo_id")
);

-- CreateTable
CREATE TABLE "product_ratings" (
    "ratings_id" SERIAL NOT NULL,
    "created_on" TIMESTAMP(6),
    "overall_rating" INTEGER,
    "shipping_rating" INTEGER,
    "customer_service_rating" INTEGER,
    "content" VARCHAR(255),

    CONSTRAINT "product_ratings_pkey" PRIMARY KEY ("ratings_id")
);

-- CreateTable
CREATE TABLE "product_returns" (
    "return_id" SERIAL NOT NULL,
    "return_availibity" BOOLEAN,

    CONSTRAINT "product_returns_pkey" PRIMARY KEY ("return_id")
);

-- CreateTable
CREATE TABLE "product_reviews" (
    "review_id" SERIAL NOT NULL,
    "created_on" TIMESTAMP(6),
    "content" VARCHAR(255),

    CONSTRAINT "product_reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "product_rooms" (
    "room_id" SERIAL NOT NULL,
    "room_name" VARCHAR(255),

    CONSTRAINT "product_rooms_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "product_sales" (
    "sale_id" SERIAL NOT NULL,
    "sales_name" VARCHAR(255),
    "sales_date" TIMESTAMP(6),

    CONSTRAINT "product_sales_pkey" PRIMARY KEY ("sale_id")
);

-- CreateTable
CREATE TABLE "products" (
    "product_id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "description" VARCHAR(255),
    "price" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_role_name_key" ON "roles"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "blog"("blog_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_comment_id_fkey1" FOREIGN KEY ("comment_id") REFERENCES "comment_photos"("comment_photo_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_more_detail" ADD CONSTRAINT "product_more_detail_more_detail_id_fkey" FOREIGN KEY ("more_detail_id") REFERENCES "product_rooms"("room_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_more_detail" ADD CONSTRAINT "product_more_detail_more_detail_id_fkey1" FOREIGN KEY ("more_detail_id") REFERENCES "product_occasions"("occasion_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_more_detail" ADD CONSTRAINT "product_more_detail_more_detail_id_fkey2" FOREIGN KEY ("more_detail_id") REFERENCES "product_categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_more_detail" ADD CONSTRAINT "product_more_detail_more_detail_id_fkey3" FOREIGN KEY ("more_detail_id") REFERENCES "product_holidays"("holiday_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_more_detail" ADD CONSTRAINT "product_more_detail_more_detail_id_fkey4" FOREIGN KEY ("more_detail_id") REFERENCES "product_sales"("sale_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product_ratings"("ratings_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_id_fkey1" FOREIGN KEY ("product_id") REFERENCES "product_returns"("return_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_id_fkey2" FOREIGN KEY ("product_id") REFERENCES "product_reviews"("review_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_id_fkey3" FOREIGN KEY ("product_id") REFERENCES "product_photos"("product_photo_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_id_fkey4" FOREIGN KEY ("product_id") REFERENCES "product_more_detail"("more_detail_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

