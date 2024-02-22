import Slider from './components/slider'

export default function Home() {
  return (
    <div className="flex mt-5 ml-20 mr-20 justify-center" >
      <div className='grid gap-10 gap-x-20 md:grid-cols-2 sm:grid-cols-1'>
        <div><Slider /></div>
        <div>
          <p className='mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start'>Подгорой - ваш уютный дом вдали от дома, расположенный в самом сердце "столицы музеев". Взгляните на мирную красоту монастыря, расположенного всего в нескольких шагах от нашего гостевого дома, и насладитесь вольным ветром в виндсерфинг-клубе, расположенном всего в 5 минутах езды на машине. Наше гостеприимное место окружено природным великолепием озера "Плещеево" и культурным наследием монастыря, что делает его идеальным местом для тех, кто ищет спокойствия и релаксации во время отдыха. Ждем вас</p>
        </div>
      </div>
    </div>
  );
}