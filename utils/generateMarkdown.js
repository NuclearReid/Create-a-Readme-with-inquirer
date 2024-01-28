// Info about each license in the list
const usedLicense = [
  {
  kind: 'Apache License 2.0',
  badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  link: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  },
  {
    kind: 'GNU General Public License v3.0',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    link: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  },
  {
    kind: 'MIT license',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link: 'https://mit-license.org/',
  },
  {
    kind: 'BSD 2-Clause "Simplified" License',
    badge: 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
    link: 'https://opensource.org/license/bsd-2-clause/',
  },
  {
    kind: 'BSD 3-Clause "New" or "Revised" License',
    badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    link: 'https://opensource.org/license/BSD-3-clause/',
  },
  {
    kind:'Boost Software License 1.0',
    badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    link: 'https://www.boost.org/users/license.html',
  },
  {
    kind: 'None',
    badge: 'https://img.shields.io/badge/License-None-green.svg',
    link: '',
  },

]
// gets the link for the badge of the selected license
function renderLicenseBadge(license) {
switch(license){
  case 'Apache License 2.0':
    return usedLicense[0].badge;
  case 'GNU General Public License v3.0':
    return usedLicense[1].badge;
  case 'MIT license':
    return usedLicense[2].badge;
  case 'BSD 2-Clause "Simplified" License':
    return usedLicense[3].badge;
  case 'BSD 3-Clause "New" or "Revised" License':
    return usedLicense[4].badge;
  case 'Boost Software License 1.0':
    return usedLicense[5].badge;
  case 'None':
    return usedLicense[6].badge;
  default:
    return '';
}
}
// gets the web link for the license
function renderLicenseLink(license) {
  switch(license){
    case 'Apache License 2.0':
      return usedLicense[0].link;
    case 'GNU General Public License v3.0':
      return usedLicense[1].link;
    case 'MIT license':
      return usedLicense[2].link;
    case 'BSD 2-Clause "Simplified" License':
      return usedLicense[3].link;
    case 'BSD 3-Clause "New" or "Revised" License':
      return usedLicense[4].link;
    case 'Boost Software License 1.0':
      return usedLicense[5].link;
    case 'None':
      return usedLicense[6].link;
    default:
      return '';
  }

}

// Creates the info about the license if one is being used. 
function renderLicenseSection(license, licenseLink) {
  switch(license){
    case 'None':
      return '';
    default:
      return license + '\n## Notice\n\nMore information about the License being used\n [Link to the license](' + licenseLink + ')';
  }
}

// generates the text for the README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseAbout = renderLicenseSection(data.license, licenseLink);
 
  return `![License](${licenseBadge})

  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ### The command that is needed to install the required dependenceies
  \`
  ${data.installation}
  \`

  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credit}
  
  ## License
  
  ${licenseAbout}
  
  ## Badges
  
  ![License](${licenseBadge})
  
  ## Contribute
  
  ${data.contribute} 
  
  ## Tests
  
  ${data.tests}  
  
  ## Questions
    
  If you have any questions, feel free to reach out to me at my [GitHub profile.](https://github.com/${data.gitHub}) or email me at ${data.email}
  `;
}

module.exports = generateMarkdown;
