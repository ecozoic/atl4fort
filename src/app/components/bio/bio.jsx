/* @flow */
import React, { Component } from 'react';

import styles from './bio.scss';

/**
 * Bio component.
 * @extends React.Component
 */
export class Bio extends Component {
  /**
   * Render method.
   */
  render() {
    return (
      <div className={styles.bio}>
        <h2>About Senator Fort</h2>
        <p>
          Vincent Fort has been the Georgia Senate’s leading fighter for progressive values for the past two decades. He led the fight with Governor Roy Barnes to pass the nation’s toughest law against predatory lenders, and he has worked with activists and experts to reform local law enforcement practices. Senator Fort was the first Georgia legislator to sponsor a bill to create a state hate crimes law, a fight he continues to lead to this day to enhance penalties for criminals who choose their victims based on bias based on race, gender, religion or sexual orientation.
        </p>
        <p>
          Senator Fort is a career educator, working most of his teaching career at the schools of the HBCUs of the Atlanta University Center, including Morris Brown College and Morehouse College. As a professional educator, he supports public schools and teachers. He has fought for the state government to meet its obligation to our local schools under the state funding formula set by law. He has worked against right wing efforts that take funding from public schools, including vouchers and funding for-profit charter schools. In addition, Senator Fort has successfully led efforts to secure tens of millions of dollars in additional funding for Atlanta Metropolitan College and Atlanta Technical College to provide affordable educational opportunities for Atlanta’s young adults and those seeking continuing education and training.
        </p>
        <p>
          Senator Fort currently serves as the Minority Whip of the Georgia Senate, the second highest ranking position in the Democratic Caucus. He has represented parts of the City of Atlanta and south Fulton County since first winning election to the Senate in 1996. Before his Senate service, Senator Fort was the President of the Atlanta Planning Advisory Board, where he worked successfully with city leaders to improve Atlanta’s neighborhoods, including a partnership with the labor movement to provide job training in the neighborhoods near Atlanta’s 1996 Olympic Stadium.
        </p>
        <p>
          Senator Fort lives in Southwest Atlanta and is the father of three children. He received his bachelor’s degree from Central Connecticut State University and his Master’s Degree in African American history from Atlanta University. He has also completed coursework toward a doctorate degree at Emory University.
        </p>
      </div>
    );
  }
}
