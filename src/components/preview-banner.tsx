import React, { useState } from 'react';

import Link from 'next/link';

import { disablePreview } from 'lib/preview';
import { useNavigation } from 'lib/useNavigation';
import { useRouter } from 'next/router';

import Select from 'react-select';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const PreviewBanner = () => {
  const { currentPath, isPreview, route } = useNavigation();

  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();

  if (!isPreview) {
    return null;
  }

  const exitURL = disablePreview(currentPath);

  const options = [
    { value: 'default', label: 'Default' },
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'accessoires', label: 'Accessoires' },
  ];

  return <div style={{ backgroundColor: '#cdcdcd' }}>Preview!</div>;
};
