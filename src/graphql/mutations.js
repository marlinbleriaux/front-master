/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      phoneNumbers
      phone
      email
      userCognitoId
      picture {
        id
        name
        number
        size
        path
        content
        contentType
      }
      type
      student {
        id
        filiere
        level
        faculte
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
      }
      teacher {
        id
        filiere
        faculte
        ecole
        title
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        description
      }
      contacts
      devices
      invitedBy
      sexe
      transactions {
        items {
          id
          type
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      exams {
        items {
          id
          code
          ue
          codeUe
          year
          type
          teacherId
          level
          departement
          faculty
          universite
          semester
          filiere
          assets
          views
          likes
          description
          correction
          tags
          comments
          proposedBy
          status
          exercices
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      procedures {
        items {
          id
          code
          type
          subType
          name
          description
          date
          endAt
          url
          assets
          comments
          assist
          likes
          responsable
          faculty
          tags
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      infos {
        items {
          id
          title
          type
          code
          assets
          description
          publishedAt
          endAt
          url
          rating
          likes
          views
          comments
          alert
          tags
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      suggestions {
        items {
          id
          userId
          subject
          email
          metadata
          message
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      phoneNumbers
      phone
      email
      userCognitoId
      picture {
        id
        name
        number
        size
        path
        content
        contentType
      }
      type
      student {
        id
        filiere
        level
        faculte
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
      }
      teacher {
        id
        filiere
        faculte
        ecole
        title
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        description
      }
      contacts
      devices
      invitedBy
      sexe
      transactions {
        items {
          id
          type
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      exams {
        items {
          id
          code
          ue
          codeUe
          year
          type
          teacherId
          level
          departement
          faculty
          universite
          semester
          filiere
          assets
          views
          likes
          description
          correction
          tags
          comments
          proposedBy
          status
          exercices
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      procedures {
        items {
          id
          code
          type
          subType
          name
          description
          date
          endAt
          url
          assets
          comments
          assist
          likes
          responsable
          faculty
          tags
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      infos {
        items {
          id
          title
          type
          code
          assets
          description
          publishedAt
          endAt
          url
          rating
          likes
          views
          comments
          alert
          tags
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      suggestions {
        items {
          id
          userId
          subject
          email
          metadata
          message
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      phoneNumbers
      phone
      email
      userCognitoId
      picture {
        id
        name
        number
        size
        path
        content
        contentType
      }
      type
      student {
        id
        filiere
        level
        faculte
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
      }
      teacher {
        id
        filiere
        faculte
        ecole
        title
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        description
      }
      contacts
      devices
      invitedBy
      sexe
      transactions {
        items {
          id
          type
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      exams {
        items {
          id
          code
          ue
          codeUe
          year
          type
          teacherId
          level
          departement
          faculty
          universite
          semester
          filiere
          assets
          views
          likes
          description
          correction
          tags
          comments
          proposedBy
          status
          exercices
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      procedures {
        items {
          id
          code
          type
          subType
          name
          description
          date
          endAt
          url
          assets
          comments
          assist
          likes
          responsable
          faculty
          tags
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      infos {
        items {
          id
          title
          type
          code
          assets
          description
          publishedAt
          endAt
          url
          rating
          likes
          views
          comments
          alert
          tags
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      suggestions {
        items {
          id
          userId
          subject
          email
          metadata
          message
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createExam = /* GraphQL */ `
  mutation CreateExam(
    $input: CreateExamInput!
    $condition: ModelExamConditionInput
  ) {
    createExam(input: $input, condition: $condition) {
      id
      code
      ue
      codeUe
      year
      type
      teacherId
      teacher {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      level
      departement
      faculty
      universite
      semester
      filiere
      assets
      views
      likes
      description
      correction
      tags
      comments
      proposedBy
      status
      preview {
        id
        name
        number
        size
        path
        content
        contentType
      }
      exercices
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateExam = /* GraphQL */ `
  mutation UpdateExam(
    $input: UpdateExamInput!
    $condition: ModelExamConditionInput
  ) {
    updateExam(input: $input, condition: $condition) {
      id
      code
      ue
      codeUe
      year
      type
      teacherId
      teacher {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      level
      departement
      faculty
      universite
      semester
      filiere
      assets
      views
      likes
      description
      correction
      tags
      comments
      proposedBy
      status
      preview {
        id
        name
        number
        size
        path
        content
        contentType
      }
      exercices
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteExam = /* GraphQL */ `
  mutation DeleteExam(
    $input: DeleteExamInput!
    $condition: ModelExamConditionInput
  ) {
    deleteExam(input: $input, condition: $condition) {
      id
      code
      ue
      codeUe
      year
      type
      teacherId
      teacher {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      level
      departement
      faculty
      universite
      semester
      filiere
      assets
      views
      likes
      description
      correction
      tags
      comments
      proposedBy
      status
      preview {
        id
        name
        number
        size
        path
        content
        contentType
      }
      exercices
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createProcedure = /* GraphQL */ `
  mutation CreateProcedure(
    $input: CreateProcedureInput!
    $condition: ModelProcedureConditionInput
  ) {
    createProcedure(input: $input, condition: $condition) {
      id
      code
      type
      subType
      name
      description
      date
      endAt
      url
      assets
      comments
      assist
      likes
      location {
        id
        latitude
        longitude
        address
      }
      responsable
      faculty
      tags
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateProcedure = /* GraphQL */ `
  mutation UpdateProcedure(
    $input: UpdateProcedureInput!
    $condition: ModelProcedureConditionInput
  ) {
    updateProcedure(input: $input, condition: $condition) {
      id
      code
      type
      subType
      name
      description
      date
      endAt
      url
      assets
      comments
      assist
      likes
      location {
        id
        latitude
        longitude
        address
      }
      responsable
      faculty
      tags
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteProcedure = /* GraphQL */ `
  mutation DeleteProcedure(
    $input: DeleteProcedureInput!
    $condition: ModelProcedureConditionInput
  ) {
    deleteProcedure(input: $input, condition: $condition) {
      id
      code
      type
      subType
      name
      description
      date
      endAt
      url
      assets
      comments
      assist
      likes
      location {
        id
        latitude
        longitude
        address
      }
      responsable
      faculty
      tags
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createInfo = /* GraphQL */ `
  mutation CreateInfo(
    $input: CreateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    createInfo(input: $input, condition: $condition) {
      id
      title
      type
      code
      assets
      description
      publishedAt
      endAt
      url
      rating
      likes
      views
      comments
      alert
      tags
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateInfo = /* GraphQL */ `
  mutation UpdateInfo(
    $input: UpdateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    updateInfo(input: $input, condition: $condition) {
      id
      title
      type
      code
      assets
      description
      publishedAt
      endAt
      url
      rating
      likes
      views
      comments
      alert
      tags
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteInfo = /* GraphQL */ `
  mutation DeleteInfo(
    $input: DeleteInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    deleteInfo(input: $input, condition: $condition) {
      id
      title
      type
      code
      assets
      description
      publishedAt
      endAt
      url
      rating
      likes
      views
      comments
      alert
      tags
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      type
      name
      mouvement {
        id
        description
        country
        town
        origin
        religion
        secondary_school
        department
      }
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      type
      name
      mouvement {
        id
        description
        country
        town
        origin
        religion
        secondary_school
        department
      }
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      type
      name
      mouvement {
        id
        description
        country
        town
        origin
        religion
        secondary_school
        department
      }
      userID
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createSuggestion = /* GraphQL */ `
  mutation CreateSuggestion(
    $input: CreateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    createSuggestion(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      subject
      email
      phoneNumber {
        id
        number
        provider
        isMomo
        isVerified
      }
      metadata
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateSuggestion = /* GraphQL */ `
  mutation UpdateSuggestion(
    $input: UpdateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    updateSuggestion(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      subject
      email
      phoneNumber {
        id
        number
        provider
        isMomo
        isVerified
      }
      metadata
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteSuggestion = /* GraphQL */ `
  mutation DeleteSuggestion(
    $input: DeleteSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    deleteSuggestion(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        phoneNumbers
        phone
        email
        userCognitoId
        picture {
          id
          name
          number
          size
          path
          content
          contentType
        }
        type
        student {
          id
          filiere
          level
          faculte
        }
        teacher {
          id
          filiere
          faculte
          ecole
          title
          description
        }
        contacts
        devices
        invitedBy
        sexe
        transactions {
          nextToken
          startedAt
        }
        exams {
          nextToken
          startedAt
        }
        procedures {
          nextToken
          startedAt
        }
        infos {
          nextToken
          startedAt
        }
        suggestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      subject
      email
      phoneNumber {
        id
        number
        provider
        isMomo
        isVerified
      }
      metadata
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
