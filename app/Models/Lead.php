<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    public function user(): BelongsTo
    {
        return $this->belongsTo(user::class);
    }

    public function qualification()
    {
        return $this->hasOne(Qualification::class);
    }
}
