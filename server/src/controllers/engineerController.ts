import { Request, Response, NextFunction } from "express";

import db from '../models/engineerModel';

// Make a controller method to get all engineers
// Make a query that can get all engineers and pass into controller

//define type
type engineersControllerType = {
  getEngineers: (req: Request, res: Response, next: NextFunction) => void;
  addEngineers: (req: Request, res: Response, next: NextFunction) => void;
};

export const engineerController: engineersControllerType = {
  getEngineers: (req: Request, res: Response, next: NextFunction) => {
    const query = 'SELECT * FROM engineers';
  
    db.query(query)
      .then(result => {
        console.log(result);
        res.locals.engineers = result.rows;
        return next();
      })
      .catch((err) => {
        console.log(err);
        return next({
          log: 'getEngineers: An ERROR occurred querying engineer table',
          message: {
            err: 'An ERROR occurred getting engineers'
          }
        });  
      });
  },
  // add engineers into data tables 
  addEngineers: (req: Request, res: Response, next: NextFunction) => {
  
    // retrieving data from body 
    const {name, github_link, coding_obj, hrs_wk, legal_age, gender, location, skills_score} = req.body;
      
      // gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id} = req.body;

    const values = [name, github_link, coding_obj, hrs_wk, legal_age, gender, location, skills_score];

    const query = `
    INSERT INTO engineers (name, github_link, coding_obj, hrs_wk, legal_age, gender, location, skills_score)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    
    db.query(query, values)
      .then(result => {
        console.log(result);
        res.locals.newEngineer = result;
        return next();
      })
      .catch((err) => {
        console.log(err);
        return next({
          log: 'addEngineers: An ERROR occurred adding engineer to table',
          message: {
            err: 'An ERROR occurred add engineers'
          }
        });  
      });
  },
};

