<?php namespace BizMark\Yota\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * CreateOffersTable Migration
 */
class CreateOffersTable extends Migration
{
    const TABLE_NAME = 'bizmark_yota_offers';
    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->increments('id');
            $table->enum('type', ['home', 'business']);
            $table->integer('category_id')->unsigned()->index();
            $table->string('name');
            $table->string('slug')->index();
            $table->text('preview_text')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
}
