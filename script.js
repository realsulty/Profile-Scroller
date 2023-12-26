const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];
const container = document.getElementById('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.getElementById('next');

function* createProfileIterator() {
  let index = 0;
  while (true){
    yield people[index++ % people.length];
  }
};

const iterator = createProfileIterator();

nextBtn.addEventListener('click', () => {
 const person = iterator.next().value;
 img.src =person.imageURL;
 profileInfo.querySelector('h3').textContent = person.name;
 profileInfo.querySelectorAll('p')[0].textContent = `${person.age} Yearsl Old`;
 profileInfo.querySelectorAll('p')[1].textContent = `${person.location}`;
 profileInfo.querySelectorAll('p')[2].textContent = person.looking;

})
nextBtn.click(); /// With Arrow functions is fine when you run the function in the global scoope
// beacuse the funnctions does not have a name, you basicaly firing theclick event only 