<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('success_stories_posts', function (Blueprint $table) {
            $table->foreign('category_id')->references('id')->on('categories');            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('success_stories_posts', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
        });
    }
};