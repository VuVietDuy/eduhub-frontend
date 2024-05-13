import {
  DribbbleOutlined,
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="card m-6 md:flex md:items-center md:justify-between">
      <ul className="flex flex-wrap items-center mb-6 md:mb-0">
        <li>
          <a
            href="#"
            className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6"
          >
            Terms and conditions
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6"
          >
            Licensing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6"
          >
            Cookie Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal text-gray-500 hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex space-x-6 sm:justify-center">
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <FacebookFilled></FacebookFilled>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <InstagramFilled></InstagramFilled>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <TwitterCircleFilled></TwitterCircleFilled>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <GithubFilled></GithubFilled>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <DribbbleOutlined></DribbbleOutlined>
        </a>
      </div>
    </footer>
  );
}
