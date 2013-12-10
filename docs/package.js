(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "eval\n====\n\nSuperSystem Eval Component\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Eval\n====\n\nAllow for evaluation within the context of a SuperSystem component.\n\nProvides `self.eval` which will evaluate JS code and return the result.\n\n    module.exports = (I={}, self={}) ->\n      self.eval = (code) ->\n        eval code\n\n      return self\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\n",
      "type": "blob"
    },
    "test/eval.coffee": {
      "path": "test/eval.coffee",
      "mode": "100644",
      "content": "Eval = require \"../main\"\n\ndescribe \"eval\", ->\n  it \"should evaluate code within the context of the component\", ->\n    e = Eval()\n    \n    I = e.eval \"I\"\n    e.eval \"I.a = 0\"\n    \n    assert.equal I.a, 0\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  module.exports = function(I, self) {\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = {};\n    }\n    self[\"eval\"] = function(code) {\n      return eval(code);\n    };\n    return self;\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\"};",
      "type": "blob"
    },
    "test/eval": {
      "path": "test/eval",
      "content": "(function() {\n  var Eval;\n\n  Eval = require(\"../main\");\n\n  describe(\"eval\", function() {\n    return it(\"should evaluate code within the context of the component\", function() {\n      var I, e;\n      e = Eval();\n      I = e[\"eval\"](\"I\");\n      e[\"eval\"](\"I.a = 0\");\n      return assert.equal(I.a, 0);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/eval.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "main",
  "repository": {
    "id": 15091435,
    "name": "eval",
    "full_name": "distri/eval",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/eval",
    "description": "SuperSystem Eval Component",
    "fork": false,
    "url": "https://api.github.com/repos/distri/eval",
    "forks_url": "https://api.github.com/repos/distri/eval/forks",
    "keys_url": "https://api.github.com/repos/distri/eval/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/eval/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/eval/teams",
    "hooks_url": "https://api.github.com/repos/distri/eval/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/eval/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/eval/events",
    "assignees_url": "https://api.github.com/repos/distri/eval/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/eval/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/eval/tags",
    "blobs_url": "https://api.github.com/repos/distri/eval/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/eval/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/eval/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/eval/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/eval/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/eval/languages",
    "stargazers_url": "https://api.github.com/repos/distri/eval/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/eval/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/eval/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/eval/subscription",
    "commits_url": "https://api.github.com/repos/distri/eval/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/eval/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/eval/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/eval/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/eval/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/eval/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/eval/merges",
    "archive_url": "https://api.github.com/repos/distri/eval/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/eval/downloads",
    "issues_url": "https://api.github.com/repos/distri/eval/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/eval/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/eval/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/eval/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/eval/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/eval/releases{/id}",
    "created_at": "2013-12-10T22:35:17Z",
    "updated_at": "2013-12-10T22:35:40Z",
    "pushed_at": "2013-12-10T22:35:18Z",
    "git_url": "git://github.com/distri/eval.git",
    "ssh_url": "git@github.com:distri/eval.git",
    "clone_url": "https://github.com/distri/eval.git",
    "svn_url": "https://github.com/distri/eval",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});