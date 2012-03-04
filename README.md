## Welcome to Brew Day

### Ideas


#### Pre-Brew Day
* Yeast Starter
  * Malt extract amount
  * Water amount
  * Strain
  * Desired starter size
  * Method
    * Stir plate
    * Shake
  * Date
  * Notes

#### Brew Day
* Prep notes
* Date
* Key part is boil timer
* Pre-boil additions
* Boil timer starts to count down
* Big countdown timer, show when the next addition is, click to confirm addition has been made, timestamp it
* Add time stamped notes at any time
* When boil countdown is done, start to count back up.
  * Count up for cool down, yeast addition. No rush, just an informational time stamp

#### Post Brew Day
* Continue calendar dates
* Eventual calendar integration
* Be able to categorize time period
  * Is brew fermenting in primary?
  * Sitting in primary
  * Secondary
  * In bottles
  * Tasted and bottled
* Ability to mark measurements at any time, easily add:
  * Temp reading
  * Gravity reading
  * Color?
  * Visual observations
  * Bubbling


### Models

Brew
* Name - string
* Brew date - Date
* Yeast starter
* Additions
* Boil time
* Mash notes


Yeast Starter
* Yeast strain -[Yeast Strain]
* Yeast cell count desired - Int (Required)
* Target starter volume - Int (Required)
* DME amount added - Int (Required)
* Oxygenation method - String (Required)
* Day started - Date (Required)

  Yeast Strain
  * Name - String
  * Brand - String
  * Model - String

Addition
* Addition Name - [Addition Type]
* Amount - Int (Required)
* First wort addition - Bool
* Addition time - Date

  Addition Name
  * Addition Name - String (Required)
  * Addition Type - String (Required) - Ex Hops, Malt, etc.

Measurement




