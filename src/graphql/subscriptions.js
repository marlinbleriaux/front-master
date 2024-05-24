/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateExam = /* GraphQL */ `
  subscription OnCreateExam(
    $filter: ModelSubscriptionExamFilterInput
    $owner: String
  ) {
    onCreateExam(filter: $filter, owner: $owner) {
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
export const onUpdateExam = /* GraphQL */ `
  subscription OnUpdateExam(
    $filter: ModelSubscriptionExamFilterInput
    $owner: String
  ) {
    onUpdateExam(filter: $filter, owner: $owner) {
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
export const onDeleteExam = /* GraphQL */ `
  subscription OnDeleteExam(
    $filter: ModelSubscriptionExamFilterInput
    $owner: String
  ) {
    onDeleteExam(filter: $filter, owner: $owner) {
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
export const onCreateProcedure = /* GraphQL */ `
  subscription OnCreateProcedure(
    $filter: ModelSubscriptionProcedureFilterInput
    $owner: String
  ) {
    onCreateProcedure(filter: $filter, owner: $owner) {
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
export const onUpdateProcedure = /* GraphQL */ `
  subscription OnUpdateProcedure(
    $filter: ModelSubscriptionProcedureFilterInput
    $owner: String
  ) {
    onUpdateProcedure(filter: $filter, owner: $owner) {
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
export const onDeleteProcedure = /* GraphQL */ `
  subscription OnDeleteProcedure(
    $filter: ModelSubscriptionProcedureFilterInput
    $owner: String
  ) {
    onDeleteProcedure(filter: $filter, owner: $owner) {
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
export const onCreateInfo = /* GraphQL */ `
  subscription OnCreateInfo(
    $filter: ModelSubscriptionInfoFilterInput
    $owner: String
  ) {
    onCreateInfo(filter: $filter, owner: $owner) {
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
export const onUpdateInfo = /* GraphQL */ `
  subscription OnUpdateInfo(
    $filter: ModelSubscriptionInfoFilterInput
    $owner: String
  ) {
    onUpdateInfo(filter: $filter, owner: $owner) {
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
export const onDeleteInfo = /* GraphQL */ `
  subscription OnDeleteInfo(
    $filter: ModelSubscriptionInfoFilterInput
    $owner: String
  ) {
    onDeleteInfo(filter: $filter, owner: $owner) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onCreateTransaction(filter: $filter, owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onUpdateTransaction(filter: $filter, owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onDeleteTransaction(filter: $filter, owner: $owner) {
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
export const onCreateSuggestion = /* GraphQL */ `
  subscription OnCreateSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
    $owner: String
  ) {
    onCreateSuggestion(filter: $filter, owner: $owner) {
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
export const onUpdateSuggestion = /* GraphQL */ `
  subscription OnUpdateSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
    $owner: String
  ) {
    onUpdateSuggestion(filter: $filter, owner: $owner) {
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
export const onDeleteSuggestion = /* GraphQL */ `
  subscription OnDeleteSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
    $owner: String
  ) {
    onDeleteSuggestion(filter: $filter, owner: $owner) {
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
