<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SuccessStoryResource\Pages;
use App\Filament\Resources\SuccessStoryResource\RelationManagers;
use App\Models\SuccessStoriesPost;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\RichEditor;

use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Str;

class SuccessStoryResource extends Resource
{
    protected static ?string $model = SuccessStoriesPost::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('logo')->image()->directory('posts/logos'),
                TextInput::make('title')
                ->live(onBlur:true)
                ->unique(ignoreRecord: true)
                ->required()->minLength(1)->maxLength(150)
                ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                    if ($operation === 'edit') {
                        return;
                    }                    
                    $set('slug', Str::slug($state));
                }),
                TextInput::make('slug')->unique(ignoreRecord: true)->required()->minLength(1)->maxLength(150),
                TextInput::make('author')->required(),
                TextArea::make('summary')
                ->rows(5)
                ->cols(20)
                ->minLength(10)
                ->maxLength(300)
                ->required(),
                FileUpload::make('thumbnail')->image()->directory('success-stories/thumbnails'),
                RichEditor::make('body')
                ->toolbarButtons([
                    'attachFiles',
                    'blockquote',
                    'bold',
                    'bulletList',
                    'codeBlock',
                    'h2',
                    'h3',
                    'italic',
                    'link',
                    'orderedList',
                    'redo',
                    'strike',
                    'underline',
                    'undo',
                ])
                ->fileAttachmentsDirectory('success-stories/images')
                ->required(),
                CheckboxList::make('industries')
                ->relationship('industries', 'title')
                ->required(),                
                DateTimePicker::make('published_at')
                    ->default(now()),
                TagsInput::make('tags')
                ->suggestions([
                    'tailwindcss',
                    'alpinejs',
                    'laravel',
                    'livewire',
                ])
                ->nestedRecursiveRules([
                    'min:3',
                    'max:255',
                ]),
                Toggle::make('is_featured')->inline(),
                Toggle::make('is_arabic')->inline()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('logo'),
                TextColumn::make('title')->sortable()->searchable(),
                ImageColumn::make('thumbnail')
                ->defaultImageUrl(url('/images/logo-light.webp')),
                TextColumn::make('slug'),
                TextColumn::make('industry_id')->sortable(),
                TextColumn::make('published_at')->date('M-d-Y')->sortable()->searchable(),
                ToggleColumn::make('is_featured')->label('Featured'),
                ToggleColumn::make('is_arabic')->label('In Arabic'),
                TextColumn::make('created_at')
                ->dateTime('M-d-Y')
                ->sortable()
                ->searchable(),
                TextColumn::make('updated_at')
                ->dateTime('M-d-Y'),          
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSuccessStories::route('/'),
            'create' => Pages\CreateSuccessStory::route('/create'),
            'edit' => Pages\EditSuccessStory::route('/{record}/edit'),
        ];
    }
}