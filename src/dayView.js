import React from 'react'


import WeekDay from './WeekDay'
import Sniadanie from './Sniadanie'
import DrugieSniadanie from './DrugieSniadanie'
import Obiad from './Obiad'
import Podwieczorek from './Podwieczorek'
import Kolacja from './Kolacja'



const dayView = () => (

<div>
  <WeekDay/>
  <Sniadanie/>
  <DrugieSniadanie/>
  <Obiad/>
  <Podwieczorek/>
  <Kolacja/>
</div>
)

export default dayView