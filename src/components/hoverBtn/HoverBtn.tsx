const HoverButton: React.FC<{ link: string; text: string }> = ({ link, text }) => (
   <a
        href={link}
        className="relative inline-block w-[80%] mt-6 rounded-[100px] font-['Poppins'] font-extrabold text-[16px] leading-[61px] text-[#3983b2] text-center tracking-[0.02em] overflow-hidden group transition-colors duration-500"
        style={{
          background: '#e6bd49',
          boxShadow: 'inset -2px -2px 2px rgba(7, 13, 29, 0.3)',
          height: '60px',
          lineHeight: '61px',
          padding: '0 35px',
        }}
      >
        {/* الدائرة البيضاء تبدأ من الزاوية العليا اليمنى */}
        <span className="absolute top-0 right-0 w-[200px] h-[60px] bg-white rounded-full scale-0 transform origin-top-right group-hover:scale-[1] transition-transform duration-500 ease-out z-0"></span>

        {/* النص فوق الدائرة */}
        <span className="relative z-10 group-hover:text-[#e6bd49] transition-colors duration-500">
          {text}
        </span>
      </a>
);

export default HoverButton
