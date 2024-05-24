/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getExam = /* GraphQL */ `
  query GetExam($id: ID!) {
    getExam(id: $id) {
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
export const listExams = /* GraphQL */ `
  query ListExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const syncExams = /* GraphQL */ `
  query SyncExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const examsByTeacherIdAndUe = /* GraphQL */ `
  query ExamsByTeacherIdAndUe(
    $teacherId: ID!
    $ue: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    examsByTeacherIdAndUe(
      teacherId: $teacherId
      ue: $ue
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const examsByFiliere = /* GraphQL */ `
  query ExamsByFiliere(
    $filiere: Filiere!
    $sortDirection: ModelSortDirection
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    examsByFiliere(
      filiere: $filiere
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const examsByUserIDAndCode = /* GraphQL */ `
  query ExamsByUserIDAndCode(
    $userID: ID!
    $code: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    examsByUserIDAndCode(
      userID: $userID
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const getProcedure = /* GraphQL */ `
  query GetProcedure($id: ID!) {
    getProcedure(id: $id) {
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
export const listProcedures = /* GraphQL */ `
  query ListProcedures(
    $filter: ModelProcedureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProcedures(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const syncProcedures = /* GraphQL */ `
  query SyncProcedures(
    $filter: ModelProcedureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProcedures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const proceduresByUserIDAndName = /* GraphQL */ `
  query ProceduresByUserIDAndName(
    $userID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProcedureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    proceduresByUserIDAndName(
      userID: $userID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const getInfo = /* GraphQL */ `
  query GetInfo($id: ID!) {
    getInfo(id: $id) {
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
export const listInfos = /* GraphQL */ `
  query ListInfos(
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        user {
          id
          phoneNumbers
          phone
          email
          userCognitoId
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const syncInfos = /* GraphQL */ `
  query SyncInfos(
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        user {
          id
          phoneNumbers
          phone
          email
          userCognitoId
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const infosByUserIDAndTitle = /* GraphQL */ `
  query InfosByUserIDAndTitle(
    $userID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    infosByUserIDAndTitle(
      userID: $userID
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        user {
          id
          phoneNumbers
          phone
          email
          userCognitoId
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const transactionsByUserIDAndName = /* GraphQL */ `
  query TransactionsByUserIDAndName(
    $userID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByUserIDAndName(
      userID: $userID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const getSuggestion = /* GraphQL */ `
  query GetSuggestion($id: ID!) {
    getSuggestion(id: $id) {
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
export const listSuggestions = /* GraphQL */ `
  query ListSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          phoneNumbers
          phone
          email
          userCognitoId
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const syncSuggestions = /* GraphQL */ `
  query SyncSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSuggestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        user {
          id
          phoneNumbers
          phone
          email
          userCognitoId
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
export const suggestionsByUserIdAndMessage = /* GraphQL */ `
  query SuggestionsByUserIdAndMessage(
    $userId: ID!
    $message: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    suggestionsByUserIdAndMessage(
      userId: $userId
      message: $message
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          phoneNumbers
          phone
          email
          userCognitoId
          type
          contacts
          devices
          invitedBy
          sexe
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
      nextToken
      startedAt
    }
  }
`;
