<?php namespace BizMark\Yota\Models;

use Model;
use System\Models\File;

/**
 * Offer Model
 * @package BizMark\Yota\Models
 * @author Nick Khaetsky, Biz-Mark, nick@biz-mark.ru
 *
 * @mixin \October\Rain\Database\Builder
 * @mixin \Eloquent
 *
 * @property int                                               $id
 * @property string                                            $type
 * @property string                                            $name
 * @property string                                            $slug
 * @property string|null                                       $preview_text
 * @property string|null                                       $description
 * @property \October\Rain\Argon\Argon                         $created_at
 * @property \October\Rain\Argon\Argon                         $updated_at
 *
 * Relations
 * @property int                                               $category_id
 * @property Category                                          $category
 * @method \October\Rain\Database\Relations\BelongsTo|Category category()
 *
 * @property File                                              $preview_image
 * @method \October\Rain\Database\Relations\AttachOne|File     preview_image()
 *
 * @method static $this                                        getHome()
 * @method static $this                                        getBusiness()
 */
class Offer extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string table associated with the model
     */
    public $table = 'bizmark_yota_offers';

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
        'type' => 'required',
        'name' => 'required',
        'slug' => 'required'
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
    public $belongsTo = [
        'category' => Category::class
    ];
    public $attachOne = [
        'preview_image' => File::class
    ];

    public function scopeGetHome($query)
    {
        return $query->where('type', 'home');
    }

    public function scopeGetBusiness($query)
    {
        return $query->where('type', 'business');
    }
}
