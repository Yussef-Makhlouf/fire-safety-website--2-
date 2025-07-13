"use client"
import {
  Phone,
  Shield,
  Wrench,
  FileCheck,
  Users,
  Award,
  Clock,
  CheckCircle,
  MapPin,
  Building,
  Factory,
  ShoppingCart,
  Settings,
  HeadphonesIcon,
  Star,
  MessageCircle,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X,
  Facebook,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const clients = [
    { name: "شركة الغنام", type: "مستودعات", location: "الغنامية - الرياض" },
    { name: "شركة سقالة الأدوية", type: "مستودعات", location: "السلي الرياض" },
    { name: "شركة الرياض القابضة", type: "حراج بن قاسم", location: "العزيزية الرياض" },
    { name: "شركة الرياض القابضة", type: "مول بوابة الرياض", location: "العقيق - الرياض" },
    { name: "شركة الرياض القابضة", type: "مدينة تجمع لندن", location: "طريق الملك فهد الرياض" },
    { name: "شركة الرياض القابضة", type: "مركز الشرق لقطع غيار السيارات", location: "السلي الرياض" },
    { name: "شركة ميرام الرياض", type: "سوق الذهب", location: "العزيزية الرياض" },
    { name: "شركة ادل العقارية", type: "مجمع سكني", location: "الجنادرية الرياض" },
    { name: "مصنع ازان المعدان", type: "مصنع", location: "السلي الرياض" },
    { name: "شركة صروح للتقنيات", type: "مستودعات ومجمعات سكنية", location: "طريق الخرج الرياض" },
    { name: "كلية الملك خالد الجوية", type: "مجمعات سكنية", location: "المجمعة الرياض" },
    { name: "شركة علم أيزان", type: "معارض", location: "حي الملك فهد الرياض" },
    { name: "شركة ديكورات باسل", type: "معارض", location: "النخيل الرياض" },
    { name: "شركة أنظمة جدة", type: "معارض", location: "العليا الرياض" },
    { name: "شركة مشارق العقارية", type: "مجمعات سكنية", location: "اليرموك الرياض" },
    { name: "مدارس التميز الأهلية", type: "مدارس", location: "غرناطة الرياض" },
  ]

  const services = [
    {
      icon: Shield,
      title: "أنظمة الإنذار المبكر للحرائق",
      description: "تقنيات متطورة للكشف المبكر عن الحرائق وحماية الأرواح والممتلكات",
      features: [
        "كاشفات دخان ذكية بتقنية الاستشعار المتقدم",
        "أنظمة إنذار صوتية ومرئية عالية الوضوح",
        "لوحات تحكم مركزية متصلة بالمراقبة",
        "تغطية شاملة لجميع المساحات والزوايا",
        "اختبارات دورية وصيانة مستمرة",
      ],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
    },
    {
      icon: Wrench,
      title: "صيانة وفحص معدات الإطفاء",
      description: "خدمات صيانة احترافية لضمان جاهزية المعدات في حالات الطوارئ",
      features: [
        "فحص طفايات الحريق (بودرة، CO2، رغوة)",
        "اختبار ضغط خراطيم المياه والصمامات",
        "صيانة أنظمة الرش التلقائي",
        "تقارير فنية معتمدة وشهادات صلاحية",
        "استبدال القطع التالفة بأخرى أصلية",
      ],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: Clock,
      title: "عقود الصيانة الشاملة",
      description: "برامج صيانة مخصصة لضمان استمرارية عمل أنظمة السلامة",
      features: [
        "صيانة وقائية مجدولة حسب المعايير",
        "فريق طوارئ متاح 24/7",
        "تحديث الأنظمة القديمة",
        "تدريب الموظفين على الاستخدام",
        "تقارير شهرية مفصلة",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: FileCheck,
      title: "استخراج شهادات السلامة",
      description: "مساعدة شاملة للحصول على جميع التراخيص والشهادات المطلوبة",
      features: [
        "تقييم شامل وفق اشتراطات الدفاع المدني",
        "إعداد الوثائق والمستندات",
        "متابعة مع الجهات الرسمية",
        "تنبيهات انتهاء الصلاحية",
        "خدمات التجديد السريع",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
  ]

  const stats = [
    { number: "500+", label: "مشروع مكتمل", icon: Building },
    { number: "15+", label: "سنة خبرة", icon: Award },
    { number: "50+", label: "عميل راضي", icon: Users },
    { number: "24/7", label: "دعم فني", icon: HeadphonesIcon },
  ]

  const projectCategories = [
    { name: "مستودعات", count: 8, icon: Factory },
    { name: "مجمعات سكنية", count: 6, icon: Building },
    { name: "معارض تجارية", count: 4, icon: ShoppingCart },
    { name: "مصانع", count: 3, icon: Settings },
    { name: "مدارس", count: 2, icon: Users },
    { name: "مراكز تجارية", count: 5, icon: MapPin },
  ]

  const navigationItems = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#services-details", label: "تفاصيل الخدمات" },
    { href: "#sectors", label: "القطاعات" },
    { href: "#projects", label: "مشاريعنا" },
    { href: "#contact", label: "اتصل بنا" },
  ]

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 space-x-reverse">
          
   <Image src="/logo.png" alt="logo" width={100} height={100}  className=" rounded-full border-2 border-red-600 p-2 w-16 h-16"/>
            
              <div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">خدمات السلامة</span>
                <p className="text-xs sm:text-sm text-gray-600">ومكافحة الحريق</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-24 sm:pt-28 lg:pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                          <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-red-100 text-red-800 border-red-200 text-sm hover:bg-red-200 hover:text-red-800">الرائدون في مجال السلامة</Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    حماية شاملة
                    <span className="text-red-600"> لمنشأتك</span>
                    <br />
                    من مخاطر الحريق
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    نوفر أحدث أنظمة الإنذار المبكر وخدمات الصيانة المتخصصة لضمان سلامة الأرواح والممتلكات بأعلى معايير
                    الجودة والكفاءة في جميع أنحاء المملكة العربية السعودية. نخدم جميع القطاعات من المستودعات والمصانع إلى المجمعات السكنية والمراكز التجارية
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">أنظمة الإنذار المبكر</Badge>
                    <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">صيانة معدات الإطفاء</Badge>
                    <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">عقود الصيانة الشاملة</Badge>
                    <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">شهادات السلامة</Badge>
                  </div>
                </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/966555275651', '_blank')}
                >
                  <MessageCircle className="h-5 w-5 ml-2" />
                  استشارة مجانية عبر الواتساب
                </Button>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => window.open('tel:+966555275651', '_blank')}
                >
                  <Phone className="h-5 w-5 ml-2" />
                  اتصال مباشر
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-6 lg:pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border">
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mx-auto mb-2" />
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.number}</div>
                      <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="أنظمة مكافحة الحريق"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-red-600 text-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
                  <div>
                    <p className="font-bold text-sm sm:text-lg">حماية 24/7</p>
                    <p className="text-red-100 text-xs sm:text-sm">مراقبة مستمرة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us */}
      <section id="about" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-[#897c71]/10 text-[#897c71] border-[#897c71]/20 mb-4 hover:bg-[#897c71]/20 hover:text-[#897c71]">من نحن</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">رواد السلامة في المملكة العربية السعودية</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              شركة رائدة في مجال خدمات السلامة ومكافحة الحريق، نقدم حلولاً متكاملة ومبتكرة لحماية المنشآت والأرواح في
              جميع أنحاء المملكة العربية السعودية. نحن نعتبر أنفسنا شركاء استراتيجيين في حماية الأرواح والممتلكات
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">خبرة تمتد لأكثر من 15 عاماً في مجال السلامة</h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  نحن فريق من المتخصصين والمهندسين المعتمدين في أنظمة السلامة ومكافحة الحريق، نعمل على توفير أحدث
                  التقنيات والحلول المبتكرة لضمان حماية شاملة لجميع أنواع المنشآت. نقدم خدمات متكاملة تشمل التصميم والتركيب والصيانة والتدريب.
                </p>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  نخدم جميع القطاعات من المستودعات والمصانع إلى المجمعات السكنية والمراكز التجارية والمؤسسات التعليمية والحكومية.
                </p>
              </div>

              {/* <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <Card className="text-center border-0 shadow-lg bg-red-50">
                  <CardContent className="p-4 lg:p-6">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-2">500+</div>
                    <p className="text-gray-700 font-medium text-sm lg:text-base">مشروع مكتمل</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg bg-[#897c71]/5">
                  <CardContent className="p-4 lg:p-6">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#897c71] mb-2">15+</div>
                    <p className="text-gray-700 font-medium text-sm lg:text-base">سنة خبرة</p>
                  </CardContent>
                </Card>
              </div> */}

              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">معتمدون من الدفاع المدني السعودي</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">شهادات جودة عالمية ISO 9001:2015</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">فريق فني متخصص ومدرب على أحدث التقنيات</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">خدمة عملاء متاحة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">تغطية جميع مناطق المملكة</span>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-xl">
                <img src="/placeholder.svg?height=400&width=500" alt="فريق العمل" className="rounded-lg w-full h-auto" />
              </div>
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white p-3 lg:p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Star className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-500" />
                  <span className="font-bold text-gray-900 text-sm lg:text-base">تقييم 5 نجوم</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Company Values */}
          {/* <div className="mt-16 lg:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">قيمنا ومبادئنا</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Card className="text-center border-0 shadow-lg bg-red-50 hover:shadow-xl transition-all">
                <CardContent className="p-6 lg:p-8">
                  <div className="bg-red-600 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">السلامة أولاً</h4>
                  <p className="text-gray-600 text-sm lg:text-base">نضع سلامة الأرواح والممتلكات في المقام الأول</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-[#897c71]/5 hover:shadow-xl transition-all">
                <CardContent className="p-6 lg:p-8">
                  <div className="bg-[#897c71] w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">الجودة المتميزة</h4>
                  <p className="text-gray-600 text-sm lg:text-base">نلتزم بأعلى معايير الجودة والكفاءة</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-green-50 hover:shadow-xl transition-all">
                <CardContent className="p-6 lg:p-8">
                  <div className="bg-green-600 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">خدمة العملاء</h4>
                  <p className="text-gray-600 text-sm lg:text-base">نقدم خدمة عملاء متميزة على مدار الساعة</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-orange-50 hover:shadow-xl transition-all">
                <CardContent className="p-6 lg:p-8">
                  <div className="bg-orange-600 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">الابتكار المستمر</h4>
                  <p className="text-gray-600 text-sm lg:text-base">نواكب أحدث التقنيات والحلول المبتكرة</p>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </section>

      {/* Enhanced Services */}
      <section id="services" className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-red-100 text-red-800 border-red-200 mb-4 hover:bg-red-200 hover:text-red-800">معرض مشاريعنا</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">مشاريعنا المنجزة</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              نعرض لكم مجموعة من مشاريعنا المنجزة في مختلف القطاعات، حيث قمنا بتقديم خدمات السلامة ومكافحة الحريق بأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {/* مشروع 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro1.jpg"
                alt="مشروع 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 1</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro2.jpg"
                alt="مشروع 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 2</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro3.jpg"
                alt="مشروع 3"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 3</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro4.jpg"
                alt="مشروع 4"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 4</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro5.jpg"
                alt="مشروع 5"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 5</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro6.jpg"
                alt="مشروع 6"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 6</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 7 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro7.jpg"
                alt="مشروع 7"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 7</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 8 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro11.jpg"
                alt="مشروع 8"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 8</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 9 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro9.jpg"
                alt="مشروع 9"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 9</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>

            {/* مشروع 10 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/pro10.jpg"
                alt="مشروع 10"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-lg font-bold mb-2">مشروع 10</h3>
                  <p className="text-sm">خدمات السلامة ومكافحة الحريق</p>
                </div>
              </div>
            </div>
          </div>

          {/* إحصائيات المشاريع */}
          {/* <div className="mt-16 lg:mt-20 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">إحصائيات مشاريعنا</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl lg:text-2xl font-bold shadow-lg">
                  500+
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">مشروع مكتمل</h4>
                <p className="text-gray-600 text-sm lg:text-base">في جميع أنحاء المملكة</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl lg:text-2xl font-bold shadow-lg">
                  15+
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">سنة خبرة</h4>
                <p className="text-gray-600 text-sm lg:text-base">في مجال السلامة</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl lg:text-2xl font-bold shadow-lg">
                  50+
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">عميل راضي</h4>
                <p className="text-gray-600 text-sm lg:text-base">من مختلف القطاعات</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl lg:text-2xl font-bold shadow-lg">
                  24/7
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">دعم فني</h4>
                <p className="text-gray-600 text-sm lg:text-base">خدمة طوارئ مستمرة</p>
              </div>
            </div>
          </div> */}

          {/* كيف نعمل معك */}
          <div className="mt-16 lg:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">كيف نعمل معك؟</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl lg:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">التقييم الأولي</h4>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">زيارة المنشأة وتقييم احتياجات السلامة الشاملة مع فريق متخصص</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-[#897c71] to-[#897c71]/80 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl lg:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">التصميم والتخطيط</h4>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">وضع خطة شاملة مخصصة لمنشأتك مع أحدث التقنيات</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl lg:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">التنفيذ والتركيب</h4>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">تركيب الأنظمة بأعلى معايير الجودة والسلامة</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl lg:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">المتابعة والصيانة</h4>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">صيانة دورية وخدمة عملاء مستمرة على مدار الساعة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sectors Section */}
      <section id="sectors" className="py-16 lg:py-20 bg-gradient-to-br from-[#897c71]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-[#897c71]/10 text-[#897c71] border-[#897c71]/20 mb-4 hover:bg-[#897c71]/20 hover:text-[#897c71]">القطاعات التي نخدمها</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">حلول مخصصة لجميع القطاعات</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              نقدم خدمات السلامة ومكافحة الحريق لجميع أنواع المنشآت والقطاعات في المملكة العربية السعودية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Warehouses & Storage */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="bg-red-600 p-3 rounded-xl shadow-lg">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-900">المستودعات والمخازن</CardTitle>
                    <CardDescription className="text-gray-600">حماية شاملة للمخازن الكبرى</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">أنظمة إنذار متطورة للكشف المبكر</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">أنظمة رش تلقائي للمساحات الكبيرة</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">معدات إطفاء متخصصة</span>
                  </div>
                </div>
                {/* <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-red-800 font-medium text-sm">15+ مشروع مكتمل</p>
                </div> */}
              </CardContent>
            </Card>

            {/* Residential Complexes */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="bg-[#897c71] p-3 rounded-xl shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-900">المجمعات السكنية</CardTitle>
                    <CardDescription className="text-gray-600">سلامة المجتمعات السكنية</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">أنظمة إنذار للمباني السكنية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">معدات إطفاء في كل طابق</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">تدريب السكان على الإخلاء</span>
                  </div>
                </div>
                {/* <div className="bg-[#897c71]/5 p-3 rounded-lg">
                  <p className="text-[#897c71] font-medium text-sm">12+ مشروع مكتمل</p>
                </div> */}
              </CardContent>
            </Card>

            {/* Commercial Centers */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="bg-green-600 p-3 rounded-xl shadow-lg">
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-900">المراكز التجارية</CardTitle>
                    <CardDescription className="text-gray-600">حماية المولات والأسواق</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">أنظمة إنذار للمساحات التجارية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">معدات إطفاء في كل قسم</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">خطط إخلاء للزوار</span>
                  </div>
                </div>
                {/* <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 font-medium text-sm">8+ مشروع مكتمل</p>
                </div> */}
              </CardContent>
            </Card>

            {/* Factories & Workshops */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="bg-orange-600 p-3 rounded-xl shadow-lg">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-900">المصانع والورش</CardTitle>
                    <CardDescription className="text-gray-600">حلول صناعية متخصصة</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">أنظمة إنذار للمخاطر الصناعية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">معدات إطفاء متخصصة</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">تدريب العمال على السلامة</span>
                  </div>
                </div>
                {/* <div className="bg-[#897c71]/5 p-3 rounded-lg">
                  <p className="text-[#897c71] font-medium text-sm">10+ مشروع مكتمل</p>
                </div> */}
              </CardContent>
            </Card>

            {/* Educational Institutions */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="bg-[#897c71] p-3 rounded-xl shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-900">المؤسسات التعليمية</CardTitle>
                    <CardDescription className="text-gray-600">حماية الطلاب والموظفين</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">أنظمة إنذار للمدارس والجامعات</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">معدات إطفاء في كل فصل</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">تدريب الطلاب على الإخلاء</span>
                  </div>
                </div>
                {/* <div className="bg-[#897c71]/5 p-3 rounded-lg">
                  <p className="text-[#897c71] font-medium text-sm">6+ مشروع مكتمل</p>
                </div> */}
              </CardContent>
            </Card>

            {/* Government Institutions */}
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-900">المؤسسات الحكومية</CardTitle>
                    <CardDescription className="text-gray-600">حماية المرافق الحكومية</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">أنظمة إنذار للمباني الحكومية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">معدات إطفاء متطورة</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">خطط طوارئ شاملة</span>
                  </div>
                </div>
                {/* <div className="bg-[#897c71]/5 p-3 rounded-lg">
                  <p className="text-[#897c71] font-medium text-sm">5+ مشروع مكتمل</p>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-[#897c71]/10 text-[#897c71] border-[#897c71]/20 mb-4 hover:bg-[#897c71]/20 hover:text-[#897c71]">مشاريعنا المتميزة</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">شركاء النجاح في المملكة</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              نفخر بخدمة أكثر من 500 مشروع متنوع في جميع أنحاء المملكة العربية السعودية
            </p>
          </div>

          {/* Enhanced Project Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {projectCategories.map((category, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-4 lg:p-6">
                  <div className="bg-red-50 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <category.icon className="h-6 w-6 lg:h-8 lg:w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">{category.name}</h3>
                  {/* <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                    {category.count} مشروع
                  </Badge> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Featured Clients */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 lg:mb-8">عملاؤنا المميزون</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {clients.slice(0, 9).map((client, index) => (
                <Card key={index} className="border border-gray-200 hover:border-red-300 transition-colors">
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="bg-red-50 p-2 rounded-lg">
                        <Building className="h-4 w-4 lg:h-5 lg:w-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">{client.name}</h4>
                        <p className="text-xs lg:text-sm text-gray-600 mb-2">{client.type}</p>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <MapPin className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400" />
                          <span className="text-xs text-gray-500">{client.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* <div className="text-center mt-6 lg:mt-8">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                عرض جميع المشاريع
              </Button>
            </div> */}
          </div>

          {/* Enhanced Project Success Metrics */}
          {/* <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white p-4 lg:p-6 rounded-xl mb-4">
                <Building className="h-6 w-6 lg:h-8 lg:w-8 mx-auto" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600 text-sm lg:text-base">مشروع مكتمل بنجاح</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 lg:p-6 rounded-xl mb-4">
                <Users className="h-6 w-6 lg:h-8 lg:w-8 mx-auto" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">100+</div>
              <p className="text-gray-600 text-sm lg:text-base">عميل راضي</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white p-4 lg:p-6 rounded-xl mb-4">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 mx-auto" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">13</div>
              <p className="text-gray-600 text-sm lg:text-base">منطقة في المملكة</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white p-4 lg:p-6 rounded-xl mb-4">
                <Award className="h-6 w-6 lg:h-8 lg:w-8 mx-auto" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600 text-sm lg:text-base">معدل رضا العملاء</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Enhanced Special Clients Section */}
   

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 lg:py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-white text-red-600 mb-4">تواصل معنا الآن</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">نحن في خدمتك على مدار الساعة</h2>
            <p className="text-base sm:text-lg lg:text-xl text-red-100 max-w-4xl mx-auto px-4">
              فريقنا المتخصص جاهز لتقديم الاستشارة المجانية وخدمات الطوارئ في أي وقت. نقدم خدمات شاملة تشمل التصميم والتركيب والصيانة والتدريب لجميع أنواع المنشآت
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">استشارة مجانية</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">خدمة طوارئ 24/7</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">تغطية جميع المناطق</Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">فريق متخصص</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Emergency Contact */}
            <Card className="border-0 shadow-2xl bg-white text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="bg-red-100 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Phone className="h-8 w-8 lg:h-10 lg:w-10 text-red-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">خط الطوارئ</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-base lg:text-lg font-bold text-red-600">0555275651</p>
                    <p className="text-xs lg:text-sm text-gray-600">متاح 24/7</p>
                    <Button 
                      size="sm"
                      className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white text-xs"
                      onClick={() => window.open('tel:0555275651', '_blank')}
                    >
                      <Phone className="h-3 w-3 ml-1" />
                      اتصال مباشر
                    </Button>
                  </div>
                  <div className="bg-red-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-base lg:text-lg font-bold text-red-600">0543011003</p>
                    <p className="text-xs lg:text-sm text-gray-600">دعم فني</p>
                    <Button 
                      size="sm"
                      className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white text-xs"
                      onClick={() => window.open('tel:0543011003', '_blank')}
                    >
                      <Phone className="h-3 w-3 ml-1" />
                      اتصال مباشر
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="border-0 shadow-2xl bg-white text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="bg-green-100 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <MessageCircle className="h-8 w-8 lg:h-10 lg:w-10 text-green-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">واتساب</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-sm lg:text-base"
                    onClick={() => window.open('https://wa.me/966555275651', '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 ml-2" />
                    محادثة فورية
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-green-300 text-green-600 hover:bg-green-50 text-sm lg:text-base"
                    onClick={() => window.open('tel:+966555275651', '_blank')}
                  >
                    <Phone className="h-4 w-4 lg:h-5 lg:w-5 ml-2" />
                    اتصال مباشر
                  </Button>
                  <p className="text-xs lg:text-sm text-gray-600">استشارة مجانية عبر الواتساب</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs lg:text-sm font-medium text-green-800">استجابة خلال 5 دقائق</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card className="border-0 shadow-2xl bg-white text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="bg-[#897c71]/10 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <MapPin className="h-8 w-8 lg:h-10 lg:w-10 text-[#897c71]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">مكتبنا الرئيسي</h3>
                <div className="space-y-3 text-right">
                  <div className="bg-[#897c71]/5 p-3 lg:p-4 rounded-lg">
                    <p className="font-bold text-gray-900 text-sm lg:text-base">الرياض</p>
                    <p className="text-xs lg:text-sm text-gray-600">المملكة العربية السعودية</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs lg:text-sm text-gray-600">نخدم جميع مناطق المملكة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="border-0 shadow-2xl bg-white text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="bg-orange-100 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Clock className="h-8 w-8 lg:h-10 lg:w-10 text-orange-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">ساعات العمل</h3>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 lg:p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm lg:text-base">السبت - الخميس</span>
                      <span className="text-orange-600 font-bold text-sm lg:text-base">8ص - 6م</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 lg:p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm lg:text-base">الجمعة</span>
                      <span className="text-gray-500 text-sm lg:text-base">مغلق</span>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 lg:p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-red-800 text-sm lg:text-base">خدمة الطوارئ</span>
                      <span className="text-red-600 font-bold text-sm lg:text-base">24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Social Media Section */}
          <div className="mt-12 lg:mt-16 text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 lg:mb-8">تابعنا على وسائل التواصل الاجتماعي</h3>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 space-x-reverse" dir="ltr">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"
                onClick={() => window.open('https://www.instagram.com/fire.fighting.basics?igsh=MXFsajEzOG4zajlmZg==', '_blank')}
              >
                <Instagram className="h-5 w-5 lg:h-6 lg:w-6 ml-2" />
                إنستغرام
              </Button>
         
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"
                onClick={() => window.open('https://x.com/fire_fight_bas', '_blank')}
              >
                <Twitter className="h-5 w-5 lg:h-6 lg:w-6 ml-2" />
                تويتر
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61578185585083', '_blank')}
              >
                <Facebook className="h-5 w-5 lg:h-6 lg:w-6 ml-2" />
                فيسبوك
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"
                onClick={() => window.open('https://www.tiktok.com/@fire.fighting.basics?lang=ar', '_blank')}
              >
                <svg className="h-5 w-5 lg:h-6 lg:w-6 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                تيك توك
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"
                onClick={() => window.open('https://www.snapchat.com/add/firefightbas?share_id=DR1GAX_SMJA&locale=ar-EG', '_blank')}
              >
                {/* Snapchat SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z" fill="#dc2626"/>
                </svg>
                سناب شات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-red-600 p-2 lg:p-3 rounded-lg">
                    <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold">خدمات السلامة</h3>
                    <p className="text-gray-400 text-sm lg:text-base">ومكافحة الحريق</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  الشركة الرائدة في مجال خدمات السلامة ومكافحة الحريق في المملكة العربية السعودية، نقدم حلولاً شاملة
                  ومبتكرة لحماية الأرواح والممتلكات. نخدم جميع القطاعات من المستودعات والمصانع إلى المجمعات السكنية والمراكز التجارية.
                </p>
                <div className="flex space-x-4 space-x-reverse">
                  <div 
                    className="bg-gray-800 p-2 lg:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    onClick={() => window.open('https://www.instagram.com/fire.fighting.basics?igsh=MXFsajEzOG4zajlmZg==', '_blank')}
                  >
                    <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div 
                    className="bg-gray-800 p-2 lg:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    onClick={() => window.open('https://x.com/fire_fight_bas', '_blank')}
                  >
                    <Twitter className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div 
                    className="bg-gray-800 p-2 lg:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=61578185585083', '_blank')}
                  >
                    <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div 
                    className="bg-gray-800 p-2 lg:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    onClick={() => window.open('https://www.tiktok.com/@fire.fighting.basics?lang=ar', '_blank')}
                  >
                    <svg className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div 
                    className="bg-gray-800 p-2 lg:p-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    onClick={() => window.open('https://www.snapchat.com/add/firefightbas?share_id=DR1GAX_SMJA&locale=ar-EG', '_blank')}
                  >
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z" fill="#fff"/>
                </svg>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">خدماتنا</h4>
                <ul className="space-y-3 lg:space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>أنظمة الإنذار المبكر</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>صيانة معدات الإطفاء</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>عقود الصيانة الشاملة</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>شهادات السلامة</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>استشارات السلامة</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>تدريب فرق الطوارئ</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>استشارات السلامة</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>تحديث الأنظمة القديمة</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sectors */}
              <div>
                <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">القطاعات التي نخدمها</h4>
                <ul className="space-y-3 lg:space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <Factory className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المستودعات والمخازن</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <Building className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المجمعات السكنية</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المراكز التجارية</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <Settings className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المصانع والورش</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <Users className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المؤسسات التعليمية</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <Award className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المؤسسات الحكومية</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <MapPin className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المطارات والموانئ</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-400 transition-colors flex items-center space-x-2 space-x-reverse text-sm lg:text-base"
                    >
                      <Building className="h-3 w-3 lg:h-4 lg:w-4" />
                      <span>المستشفيات والمراكز الطبية</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">معلومات التواصل</h4>
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="bg-red-600 p-2 rounded-lg mt-1">
                      <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm lg:text-base">أرقام الهاتف</p>
                      <p className="text-gray-300 text-xs lg:text-sm">0555275651</p>
                      <p className="text-gray-300 text-xs lg:text-sm">0543011003</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="bg-red-600 p-2 rounded-lg mt-1">
                      <Facebook className="h-3 w-3 lg:h-4 lg:w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm lg:text-base">فيسبوك</p>
                      <p className="text-gray-300 text-xs lg:text-sm">@fire.fighting.basics</p>
                      <p className="text-gray-300 text-xs lg:text-sm">تابعنا على فيسبوك</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="bg-red-600 p-2 rounded-lg mt-1">
                      <MapPin className="h-3 w-3 lg:h-4 lg:w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm lg:text-base">العنوان</p>
                      <p className="text-gray-300 text-xs lg:text-sm">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-3 lg:p-4 rounded-lg">
                    <p className="font-medium text-red-400 mb-2 text-sm lg:text-base">خدمة طوارئ 24/7</p>
                    <p className="text-xs lg:text-sm text-gray-300">نحن متاحون على مدار الساعة لخدمات الطوارئ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Certifications & Awards */}
          <div className="py-8 lg:py-12 border-t border-gray-800">
            <div className="text-center mb-6 lg:mb-8">
              <h4 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">شهاداتنا واعتماداتنا</h4>
              <p className="text-gray-400 text-sm lg:text-base">معتمدون من أفضل الجهات المحلية والعالمية</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="bg-gray-800 p-4 lg:p-6 rounded-lg mb-3 lg:mb-4">
                  <Award className="h-8 w-8 lg:h-12 lg:w-12 text-red-400 mx-auto" />
                </div>
                <p className="font-medium text-sm lg:text-base">الدفاع المدني السعودي</p>
                <p className="text-xs lg:text-sm text-gray-400">معتمدون رسمياً</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 p-4 lg:p-6 rounded-lg mb-3 lg:mb-4">
                  <Shield className="h-8 w-8 lg:h-12 lg:w-12 text-[#897c71] mx-auto" />
                </div>
                <p className="font-medium text-sm lg:text-base">ISO 9001:2015</p>
                <p className="text-xs lg:text-sm text-gray-400">إدارة الجودة</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 p-4 lg:p-6 rounded-lg mb-3 lg:mb-4">
                  <CheckCircle className="h-8 w-8 lg:h-12 lg:w-12 text-green-400 mx-auto" />
                </div>
                <p className="font-medium text-sm lg:text-base">SASO</p>
                <p className="text-xs lg:text-sm text-gray-400">مطابقة المعايير</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 p-4 lg:p-6 rounded-lg mb-3 lg:mb-4">
                  <Users className="h-8 w-8 lg:h-12 lg:w-12 text-orange-400 mx-auto" />
                </div>
                <p className="font-medium text-sm lg:text-base">OSHA</p>
                <p className="text-xs lg:text-sm text-gray-400">السلامة المهنية</p>
              </div>
            </div>
          </div>

          {/* Enhanced Service Areas */}
          <div className="py-8 lg:py-12 border-t border-gray-800">
            <div className="text-center mb-6 lg:mb-8">
              <h4 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">مناطق خدماتنا</h4>
              <p className="text-gray-400 text-sm lg:text-base">نخدم جميع مناطق ومدن المملكة العربية السعودية</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 text-center">
              <div className="bg-gray-800 p-3 lg:p-4 rounded-lg">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-red-400 mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">الرياض</p>
              </div>
              <div className="bg-gray-800 p-3 lg:p-4 rounded-lg">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-red-400 mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">طريق الدمام الرياض</p>
              </div>
              <div className="bg-gray-800 p-3 lg:p-4 rounded-lg">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-red-400 mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">الدمام</p>
              </div>
              <div className="bg-gray-800 p-3 lg:p-4 rounded-lg">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-red-400 mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">مكة المكرمة</p>
              </div>
              <div className="bg-gray-800 p-3 lg:p-4 rounded-lg">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-red-400 mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">المدينة المنورة</p>
              </div>
              <div className="bg-gray-800 p-3 lg:p-4 rounded-lg">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-red-400 mx-auto mb-2" />
                <p className="font-medium text-sm lg:text-base">جميع المناطق</p>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Footer */}
          <div className="py-6 lg:py-8 border-t border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-center sm:text-right">
              <div>
                <p className="text-gray-400 text-xs lg:text-sm">© 2024 خدمات السلامة ومكافحة الحريق. جميع الحقوق محفوظة.</p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 space-x-reverse">
         <span className="text-gray-400 text-xs lg:text-sm"> تم تصميم وتطوير من قبل <a href="https://fashne.net/" className="text-red-400">  شركة الفشني للتسويق الالكتروني</a></span>
              </div>
              <div>
                <p className="text-gray-400 text-xs lg:text-sm">صُمم بعناية لخدمة السلامة في المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed grid bottom-6 left-6 z-50 space-y-3">
        {/* WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/966555275651', '_blank')}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="تواصل معنا عبر الواتساب"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {/* Phone Button */}
        <button
          onClick={() => window.open('tel:+966555275651', '_blank')}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="اتصل بنا مباشرة"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Floating Button */}
      {/* <div className="fixed bottom-6 right-6 z-50 lg:hidden ">
        <button
          onClick={() => window.open('https://wa.me/966555275651', '_blank')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 space-x-reverse"
          title="تواصل معنا عبر الواتساب"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-medium">واتساب</span>
        </button>
      </div> */}
    </div>
  )
}

