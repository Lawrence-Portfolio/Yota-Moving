<?php namespace BizMark\Yota\Models;

use Model;
use System\Models\File;

/**
 * Category Model
 * @package BizMark\Yota\Models
 * @author Nick Khaetsky, Biz-Mark, nick@biz-mark.ru
 *
 * @mixin \October\Rain\Database\Builder
 * @mixin \Eloquent
 *
 * @property int                                           $id
 * @property string                                        $name
 * @property string                                        $slug
 * @property string|null                                   $preview_text
 * @property string|null                                   $description
 * @property \October\Rain\Argon\Argon                     $created_at
 * @property \October\Rain\Argon\Argon                     $updated_at
 *
 * Relations
 * @property \October\Rain\Database\Collection|Offer       $offers
 * @method \October\Rain\Database\Relations\HasMany|Offer  offers()
 *
 * @property File                                          $preview_image
 * @method \October\Rain\Database\Relations\AttachOne|File preview_image()
 *
 * @property File                                          $description_image
 * @method \October\Rain\Database\Relations\AttachOne|File description_image()
 */
class Category extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string table associated with the model
     */
    public $table = 'bizmark_yota_categories';

    public $implement = ['RainLab.Translate.Behaviors.TranslatableModel'];

    /**
     * @var array guarded attributes aren't mass assignable
     */
    protected $guarded = ['*'];

    /**
     * @var array fillable attributes are mass assignable
     */
    protected $fillable = [];

    /**
     * @var array rules for validation
     */
    public $rules = [
        'name' => 'required',
        'slug' => 'required|unique:bizmark_yota_categories'
    ];

    /**
     * @var array dates attributes that should be mutated to dates
     */
    protected $dates = [
        'created_at',
        'updated_at'
    ];

    public $translatable = [
        'name',
        'preview_text',
        'description'
    ];

    /**
     * @var array hasOne and other relations
     */
    public $hasMany = [
        'offers' => [
            Offer::class,
            'key' => 'category_id'
        ]
    ];
    public $attachOne = [
        'preview_image' => File::class,
        'description_image' => File::class,
    ];
}
