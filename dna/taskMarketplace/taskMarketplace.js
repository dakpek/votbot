'use strict';

// -----------------------------------------------------------------
//  This stub Zome code file was auto-generated by hc-scaffold
// -----------------------------------------------------------------

// -----------------------------------------------------------------
//  Exposed functions with custom logic https://developer.holochain.org/API_reference
// -----------------------------------------------------------------

function userCreate(userEntry) {
  var userHash = commit("user", userEntry);
  commit('userLink', {
    Links: [{ Base: App.Agent.Hash, Link: userHash, Tag: "userLink" }]
  });
  commit('userLink', {
    Links: [{ Base: App.DNA.Hash, Link: userHash, Tag: "allUsers" }]
  });
  return userHash;
}

function userRead() {
  var userHash = getLinks(App.Agent.Hash, "userLink");
  var allUsers = getLinks(App.DNA.Hash, "allUsers");
  console.log('all users: ', JSON.stringify(allUsers))
  console.log('me: ', JSON.stringify(userHash))
  var user = get(userHash[0].Hash);
  return user;
}

function userUpdate(params) {
  var userHash = getLinks(App.Agent.Hash, "userLink")[0].Hash;
  var user = get(userHash);
  user[params.target] = params.newValue
  var userOutHash = update("user", user, userHash);
  return userOutHash;
}

function userDelete(userHash) {
  var result = remove(userHash, "");
  return result;
}

function taskCreate(taskEntry) {
  var taskHash = commit("task", taskEntry);
  commit('taskLink', {
    Links: [{ Base: App.Agent.Hash, Link: taskHash, Tag: "taskLink" }]
  });
  commit('taskLink', {
    Links: [{ Base: App.DNA.Hash, Link: taskHash, Tag: "allTasks" }]
  });
  console.log(taskHash);
  return taskHash;
}

function taskRead() {
  var taskHash = getLinks(App.Agent.Hash, "taskLink");
  var allTasks = getLinks(App.DNA.Hash, "allTasks");
  var allTasksFull = getLinks(App.DNA.Hash, "allTasks", { Load: true });
  console.log('all users: ', JSON.stringify(allTasks))
  console.log('me: ', JSON.stringify(taskHash))
  console.log('all tasks full: ', allTasksFull)
  return allTasksFull;
}

function taskUpdate(params) {
  var taskHash = params.taskHash;
  var task = get(taskHash);
  task[params.target] = params.newValue
  var taskOutHash = update("task", task, taskHash);
  return taskOutHash;
}

function taskDelete(taskHash) {
  var result = remove(taskHash, "");
  return result;
}

function  transferVots(params) {
  // your custom code here
  //params ={receiverHash,amount}
  //If (transfer is user --> task ) {amount<0}, else if (transfer is task --> user) {amount>0}
  var user = userRead();
  var task = taskRead(params.receiverHash);
  console.log("user: " + JSON.stringify(user))
  console.log("task: " + JSON.stringify(task))
  user.vots = Number(Number(user.vots) + Number(params.amount))
  console.log('task----', task[0].Entry.pool)
  var pool = task[0].Entry.pool
  console.log('pool----', pool)
  pool = Number(pool - Number(params.amount))
  console.log("user.vots:", user.vots)
  console.log("task.pool:", pool)
  userUpdate({
    target: 'vots',
    newValue: Number(user.vots)
  });
  taskUpdate({
    taskHash: params.receiverHash,
    target: 'pool',
    newValue: pool
  });

  console.log("returning: " + JSON.stringify(user) + JSON.stringify(task));
  console.log("LOGGING READ FUNCTIONS USER - TASK")
  console.log(JSON.stringify(userRead()))
  console.log(JSON.stringify(taskRead()))
  return "success";
}

function authenticate(params) {
  // your custom code here
  return {};
}


// -----------------------------------------------------------------
//  The Genesis Function https://developer.holochain.org/genesis
// -----------------------------------------------------------------

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis() {
  userCreate({
    "username": JSON.stringify(App.Agent.Hash),
    "vots": 50
  })
  taskCreate({
    "id": "13",
    "title": "nice title",
    "description": "testing",
    "pool": 10,
    "createdAt": "sometime",
    "status": "open"
  })
  return true;
}

// -----------------------------------------------------------------
//  Validation functions for every change to the local chain or DHT
// -----------------------------------------------------------------

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateCommit(entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "user":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "task":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "userLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "taskLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validatePut(entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "user":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "task":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "userLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "taskLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {string} replaces - the hash for the entry being updated
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateMod(entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "user":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "task":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "userLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "taskLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {string} hash - the hash of the entry to remove
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateDel(entryName, hash, pkg, sources) {
  switch (entryName) {
    case "user":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "task":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "userLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "taskLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {string} baseHash - the hash of the base entry being linked
 * @param {?} links - ?
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateLink(entryName, baseHash, links, pkg, sources) {
  switch (entryName) {
    case "user":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "task":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "userLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "taskLink":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validatePutPkg(entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateModPkg(entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateDelPkg(entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateLinkPkg(entryName) {
  return null;
}
