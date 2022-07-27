import { Request, Response, NextFunction } from "express";
import querystring from 'querystring';
import axios from 'axios';
import { get } from 'lodash';

const GITHUB_CLIENT_ID = "f21f90d98ed70b6a146a";
const GITHUB_CLIENT_SECRET = "e20570a3e38bbdebf630b0b087e43d0dedad29d7";

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: null;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}


async function getGithubUser({code}: {code: string}): Promise<GitHubUser> {
    const githubToken = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

    const decoded = querystring.parse(githubToken);

    const accessToken = decoded.access_token;

     return axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
};


export default async function authController(req: Request, res: Response, next: NextFunction) {
    const code = get(req, "query.code");
    const path = get(req, "query.code", '/');

    if (!code) {
        throw new Error("No Code!")
    }

    const githubUser = await getGithubUser({ code });

    res.redirect(path);
}