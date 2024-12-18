enum Category {
    Festival = 'Festival',
    Music = 'Music',
    Expo = 'Expo',
    Art = 'Art',
    Night = 'Night',
    Sport = 'Sport',
    Fashion = 'Fashion',
    Stage = 'Stage',
    Food = 'Food',
    Film = 'Film',
    Summer = 'Summer',
    Winter = 'Winter',
    Day = 'Day',
    Technology = 'Technology',
  }
  
  const categoryColors: { [key in Category]: string } = {
    [Category.Festival]: 'bg-blue-200',
    [Category.Music]: 'bg-purple-200',
    [Category.Expo]: 'bg-green-200',
    [Category.Art]: 'bg-red-200',
    [Category.Night]: 'bg-yellow-200',
    [Category.Sport]: 'bg-teal-200',
    [Category.Fashion]: 'bg-pink-200',
    [Category.Stage]: 'bg-indigo-200',
    [Category.Food]: 'bg-orange-200',
    [Category.Film]: 'bg-gray-200',
    [Category.Summer]: 'bg-amber-200',
    [Category.Winter]: 'bg-blue-100',
    [Category.Day]: 'bg-lime-200',
    [Category.Technology]: 'bg-cyan-200',
};

  
  export { Category, categoryColors };
  