# CONTEXT SYSTEM

  ### before context
  ```
  App --> Header --> Button
  ```
  ### With Context
  ```
  App -- Header -- Button
  |-------------------|
  In essence, communicate information from the parent to ANY nested child
  ```
  ## how it works - getting information from parent to ANY nested child
  ### CREATE A pipe that the data will move: two ways
  * Source of data: Default Value OR parent component
  * things that uses data: this.context OR consumer

