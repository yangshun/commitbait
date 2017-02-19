import programmingLanguages from 'data/programmingLanguages.json';
import frameworks from 'data/frameworks.json';
import numericalQuantities from 'data/numericalQuantities.json';
import positiveDescriptors from 'data/positiveDescriptors.json';
import techniqueDescriptors from 'data/techniqueDescriptors.json';
import extremeDescriptors from 'data/extremeDescriptors.json';
import improvementDescriptors from 'data/improvementDescriptors.json';

const list = [
  numericalQuantities.data,
  positiveDescriptors.data,
  techniqueDescriptors.data,
  [
    'to',
    'which will',
  ],
  extremeDescriptors.data,
  improvementDescriptors.data,
  [
    'the way you code in',
    'the way you do testing in',
    'the way you think about',
    'your use of',
  ],
  [
    ...programmingLanguages.data,
    ...frameworks.data,
  ],
  [
    'forever',
    'like never before',
    'permanently',
  ],
];

export default list;
