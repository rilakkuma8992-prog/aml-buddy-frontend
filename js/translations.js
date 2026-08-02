// AI-assisted display translations for the official 50-question AML Buddy bank.
// The Chinese source remains the controlling text.
var FAQ_TRANSLATIONS = {
  1:{
    q:{en:"How should the beneficial owner (UBO) of a non-natural-person customer be determined?",ja:"自然人ではない顧客の実質的支配者（UBO）はどのように判定しますか。"},
    a:{
      en:`Handle the assessment in accordance with Appendix 1 of the Customer ML/TF Risk Assessment and Review Rules:
1. Identify any natural person who directly or indirectly holds more than 25% of the shares.
2. If no person meets the above condition, identify whether any other person exercises control.
3. If no such person can be identified, treat senior management as the person to be identified.`,
      ja:`「顧客のマネー・ローンダリングおよびテロ資金供与リスク評価・審査細則」別紙1に従って対応します。
1. 直接または間接に25%超の持分を有する自然人を識別する。
2. 上記に該当する者がいない場合、その他の支配権者が存在するか確認する。
3. なお識別できない場合は、上級管理者を識別対象とする。`
    }
  },
  2:{
    q:{en:"How often does Head Office require periodic review for high-, medium-, and low-risk customers?",ja:"本部規定では、高リスク・中リスク・低リスク顧客の定期審査はどの頻度で行いますか。"},
    a:{
      en:`High risk: at least once every year.
Medium risk: at least once every 3 years.
Low risk: at least once every 7 years.
The periodic review should be started in advance and completed before the due date.`,
      ja:`高リスク：少なくとも年1回。
中リスク：少なくとも3年に1回。
低リスク：少なくとも7年に1回。
定期審査は前倒しで開始し、期限前に完了する必要があります。`
    }
  },
  3:{
    q:{en:"Under what circumstances is a customer classified as prohibited from dealing with the Bank?",ja:"どのような場合に、顧客は当行の取引禁止顧客に該当しますか。"},
    a:{
      en:`Examples include:
- Parties on UN, OFAC, or EU sanctions lists
- Persons from prohibited countries
- Parties on official reject lists
- Parties on the Bank's reject list
- Persons involved in terrorist activities or terrorist organizations
- Shell banks
- Shell companies
- Online casinos or offshore gambling businesses
- Money services businesses (MSB)
- Persons subject to an INTERPOL red notice
- Cases where bearer shares reach 10% or more or affect the UBO determination`,
      ja:`例として、以下が含まれます。
- UN、OFAC、EUの制裁リスト対象者
- 取引禁止国の者
- 公的な拒絶リスト対象者
- 当行の拒絶リスト対象者
- テロ活動またはテロ組織に関与する者
- シェルバンク
- シェルカンパニー
- オンラインカジノまたはオフショア賭博業
- 資金移動サービス業者（MSB）
- INTERPOLのレッドノーティス対象者
- 無記名株式が10%以上、またはUBO判定に影響する者`
    }
  },
  4:{
    q:{en:"During periodic customer review, must all documents be requested from the customer again?",ja:"顧客の定期審査時、すべての書類を改めて顧客から取得する必要がありますか。"},
    a:{
      en:`Not necessarily.
The purpose of periodic customer review is to review the customer again and ensure the customer information is up to date.
It does not require requesting all identification and customer due diligence documents again in every case.
If previously obtained documents are confirmed to have no changes, they do not need to be requested again, but the confirmation trail must be retained for audit purposes. *SG`,
      ja:`必ずしも必要ではありません。
定期的な顧客審査の目的は、顧客を再確認し、顧客情報が最新であることを確保することです。
すべての本人確認書類および顧客審査書類を全面的に再取得するものではありません。
前回取得した書類に変更がないことを確認できる場合は再取得を省略できますが、確認の記録を保存しておく必要があります。*SG`
    }
  },
  5:{
    q:{en:"Can an account be opened for a company that has issued bearer shares?",ja:"無記名株式を発行している会社は口座開設できますか。"},
    a:{
      en:`Both of the following conditions must be met:
- Condition 1
Bearer shares account for less than 10% of the total issued shares.
- Condition 2
The bearer shares do not affect the beneficial owner (UBO) determination.
In addition:
- The customer must sign the Statement on Issued Bearer Shares.
- EDD must be performed.
If either condition is not met, the Bank should decline or terminate the relationship.`,
      ja:`以下の2条件を同時に満たす必要があります。
- 条件1
無記名株式が発行済株式総数の10%未満であること。
- 条件2
実質的支配者（UBO）の判定に影響しないこと。
さらに、以下も必要です。
- 「発行済無記名株式声明書」に署名すること。
- EDDを実施すること。
いずれかの条件を満たさない場合は、取引開始を謝絶または取引関係を終了します。`
    }
  },
  6:{
    q:{en:"When is enhanced due diligence (EDD) required?",ja:"どのような場合に強化された顧客管理（EDD）が必要ですか。"},
    a:{
      en:`Enhanced due diligence (EDD) should be performed when the customer presents higher ML/TF risk, for example:
- The customer risk rating result is high risk
- The customer is a current PEP or an RCA, or left office within the past year
- The customer is involved in crime or major adverse news
- The customer holds issued bearer shares but meets acceptance conditions
- The customer falls within the definition of a correspondent bank / Vostro account
- Private banking business
- A company that has issued bearer shares
- A customer with nominee shareholders or nominee investors
- A natural person opening an OBU account
- A person from a prohibited country accepted under an exceptional approval assessment
- Senior management is a PEP
- The customer's nationality is in a high-risk country or region, or a jurisdiction under increased monitoring, as announced by FATF
*SG`,
      ja:`顧客が比較的高いマネロン・テロ資金供与リスクを有する場合、強化された顧客管理（EDD）を実施します。例：
- 顧客リスク評価結果が「高リスク」である
- 現職または退任後1年以内のPEPまたはRCAに該当する
- 犯罪または重大なネガティブニュースに関与している
- 発行済無記名株式を保有するが受理条件を満たす顧客
- コルレス銀行（Vostro Account）に該当する顧客
- プライベートバンキング業務
- 無記名株式を発行している会社
- 名義株主または名義出資者（Nominee）が存在する場合
- OBU口座を開設する自然人
- 取引禁止国の者で例外承認評価により取引を認める場合
- 高階管理者がPEPである場合
- 顧客の国籍がFATF公表の高リスク国・地域または強化監視国・地域に該当する場合
*SG`
    }
  },
  7:{
    q:{en:"How should a natural person's direct and indirect aggregate shareholding be calculated to determine whether they are a beneficial owner?",ja:"自然人の直接・間接の累計持株比率は、実質的支配者判定のためにどのように計算しますか。"},
    a:{
      en:`Direct shareholding is determined based on the actual shareholding percentage. Indirect shareholding is calculated by multiplying the shareholding percentages at each level. If the same natural person has both direct and indirect holdings, the direct and all indirect percentages should be added together as the aggregate direct and indirect shareholding percentage to determine whether the beneficial owner identification threshold is met (more than 25%). *pic`,
      ja:`直接持株は実際の持株比率により認定します。間接持株は各階層の持株比率を乗じて計算します。同一の自然人が直接持株と間接持株の双方を有する場合、直接持株比率と各間接持株比率を合算し、直接・間接の累計持株比率として、実質的支配者の識別基準（25%超）に達するか判断します。*pic`
    }
  },
  8:{
    q:{en:"Which entities may be exempted from beneficial owner identification?",ja:"どのような主体は実質的支配者の識別を省略できますか。"},
    a:{
      en:`The following entities may be exempted from UBO identification:
- Domestic government agencies
- Domestic public enterprises
- Foreign government agencies
- Domestic public companies and their subsidiaries
- Listed companies in foreign jurisdictions that are required to disclose major shareholders under local listing rules, and their subsidiaries
- Financial institutions supervised by domestic authorities and investment vehicles managed by them
- Financial institutions established outside Taiwan that apply FATF-standard AML/CFT controls, and investment vehicles managed by them
- Funds managed by domestic government agencies
- Employee stock ownership trusts
- Employee welfare savings trusts, etc.
However, relevant supporting documents must still be retained. If the customer:
- Comes from a high-risk country or region
- Has issued bearer shares
- Is suspected of involvement in ML/TF
identity verification must still be performed, and the exemption must not be applied directly.`,
      ja:`以下の主体はUBO識別を免除できる場合があります。
- 国内政府機関
- 国内公営事業機関
- 外国政府機関
- 国内公開発行会社およびその子会社
- 上場地の規定により主要株主の開示が求められる海外上場会社およびその子会社
- 国内監督下の金融機関およびその管理する投資ビークル
- 台湾域外に設立され、FATF基準のAML/CFT管理を実施する金融機関およびその管理する投資ビークル
- 国内政府機関が管理する基金
- 従業員持株信託
- 従業員福利貯蓄信託など
ただし、関連証明書類は保存する必要があります。また顧客が以下に該当する場合：
- 高リスク国・地域に由来する
- 無記名株式を発行している
- マネロンまたはテロ資金供与の疑いがある
本人確認を実施し、免除規定を直ちに適用してはなりません。`
    }
  },
  9:{
    q:{en:"When might a person holding 25% or less still be identified as a beneficial owner?",ja:"持株比率が25%以下でも、どのような場合に実質的支配者と認定され得ますか。"},
    a:{
      en:`Including but not limited to:
1. The person has absolute decision-making, voting, or veto rights over the customer's activities, such as:
- Adopting or changing operating plans, including investment, donations, and transactions
- Changing the nature of business, such as products sold
- Increasing borrowings
- Appointing or removing the general manager
- Issuing or amending dividend policies, including benefit distribution, or compensation policies for directors and employees
- Approving employee stock options or similar equity incentive plans
- Amending articles of association, partnership agreements, deeds, or similar governing documents
- Diluting equity, including approving capital increases or introducing new shareholders or partners
- Dissolution
2. The person has the authority to appoint or remove more than half of the customer's directors, general partners, or responsible persons.
3. The person holds important assets of the customer or entities in the ownership structure, giving influence beyond their formal authority.
4. The person is nominally only an ordinary director but in practice regularly influences board or committee decisions and may have final decision-making power.
5. Although holding 25% or less, the person has strong influence over other shareholders' or partners' votes, often as a company founder or key operator of a family business.`,
      ja:`以下を含みますが、これらに限られません。
1. 顧客の次の活動について絶対的な決定権、議決権または拒否権を有する場合：
- 事業計画（投資、寄付、取引等を含む）の採択または変更
- 販売商品など事業性質の変更
- 借入増加
- 総経理の任命または解任
- 配当政策（受益割合の分配を含む）または役員・従業員報酬政策の制定・変更
- 従業員ストックオプションまたは類似の株式インセンティブ計画への同意
- 定款、パートナーシップ契約、信託証書または類似権限文書の変更
- 増資承認や新株主・パートナー導入などによる持分希薄化
- 解散
2. 顧客の取締役、普通パートナーまたは責任者の過半数を任免する権限を有する場合。
3. 顧客または所有構造内の主体の重要資産を保有し、会社運営に対し形式的権限を超える影響力を有する場合。
4. 名義上は一般取締役にすぎないが、実際には取締役会または委員会の意思決定に常態的に影響し、最終決定権を有する場合。
5. 持株比率が25%以下でも、他の株主・パートナーの投票に強い影響力を有する場合。通常、創業者または家族企業の主要経営者などが該当します。`
    }
  },
  10:{
    q:{en:"Which documents can be used to understand the ownership structure of a non-natural-person customer?",ja:"自然人ではない顧客の持株構造を把握するため、どのような書類を利用できますか。"},
    a:{
      en:`Examples include shareholder registers, articles of association, company registration records, certificates of incumbency (COI), company search reports, and business registration records.`,
      ja:`例として、株主名簿、定款、会社登記資料、役員在職証明書（COI）、会社検索報告、商工登記資料などがあります。`
    }
  },
  11:{
    q:{en:"What is the customer review procedure? *more specific",ja:"顧客審査手続はどのようなものですか。*より具体的に"},
    a:{
      en:`The purpose of customer review is to re-examine the customer and ensure that customer information is current. The Bank should first use existing retained information to identify and verify the customer, review whether customer data has changed, update the customer registration system if changes are found, and retain the source and relevant documents. For legal persons or organizations, the confirmation scope should include beneficial owner (UBO) and senior management information, and supporting documents may be requested again when necessary.
For high-risk customers, in addition to checking the Customer Review Checklist, the Bank must reconfirm EDD-related matters and complete the Enhanced Due Diligence Checklist and Questionnaire for supervisor approval. Medium- and low-risk customers should follow the general review rules and complete periodic review after reviewer approval.`,
      ja:`顧客審査の目的は、顧客を再確認し、顧客情報が現況に合っていることを確保することです。実施時は、まず当行の既存保存資料により顧客の本人確認および検証を行い、顧客情報に変更があるか確認します。変更がある場合は顧客登録システムを更新し、情報源および関連書類を保存します。顧客が法人または団体の場合、確認範囲には実質的支配者（UBO）および高階管理者情報を含め、必要に応じて関連証明書類を再取得します。
高リスク顧客については、「顧客審査チェックリスト」による確認に加え、EDD関連事項を再確認し、「強化顧客審査チェックリストおよび質問票」を完了したうえで主管者の審核を受けます。中・低リスク顧客は一般顧客審査規定に従い、覆核者の審核後に定期審査を完了します。`
    }
  },
  12:{
    q:{en:"How should an existing customer be handled if they do not cooperate with periodic review or cannot be contacted? *operational",ja:"既存顧客が定期審査に協力しない、または連絡不能の場合はどのように対応しますか。*実務"},
    a:{
      en:`If an existing customer does not cooperate with review or cannot be contacted, a two-month grace period will be given after the customer review due date (T to T+2 months). During the grace period, the customer is restricted from applying for new business, while existing business may continue, and a note should be recorded in the customer registration system. If the customer still does not cooperate or cannot be contacted after T+2 months, new and existing business should be restricted based on the customer's risk level, with a system note recorded. If the customer clearly refuses to cooperate before the review due date, the business unit should retain relevant records and select rejection in the system. If the customer cannot be contacted once the review due date is reached, the same approach applies.`,
      ja:`既存顧客が審査に協力しない、または連絡不能の場合、顧客審査期限日（T）後に2か月の猶予期間（T～T+2か月）が付与されます。猶予期間中は新規業務申請を制限しますが、既存業務は継続可能であり、顧客登録システムに注記します。T+2か月を過ぎてもなお協力しない、または連絡不能の場合は、顧客リスク等級に応じて新旧業務取引を制限し、システムに注記します。顧客が審査期限日前に明確に審査拒否を表明した場合、実施部門は関連記録を保存し、システム上で拒否を選択します。審査期限日に至っても顧客と連絡が取れない場合も、同様の取扱いとします。`
    }
  },
  13:{
    q:{en:"When a customer conducts business through an agent, what should be confirmed?",ja:"顧客が代理人を通じて手続を行う場合、何を確認すべきですか。"},
    a:{
      en:`Confirm whether the agency relationship exists, and identify and verify the agent's identity.`,
      ja:`代理関係が存在するか確認し、代理人の本人識別および検証を行います。`
    }
  },
  14:{
    q:{en:"If a customer comes from a prohibited country but has obtained domestic nationality or holds a local residence/work permit, how should the risk be assessed?",ja:"顧客が取引禁止国出身だが、自国籍を取得済み、または国内の居留証・就労証を保有している場合、リスクはどのように判断しますか。"},
    a:{
      en:`If the customer has nationality of a prohibited country, the customer is in principle a prohibited customer. However, a natural person who has obtained domestic nationality (holding a national ID card) may be assessed based on the customer's retained information and relevant rules, with EDD performed, and may be approved for dealings after unit supervisor approval. If the customer holds documents issued by domestic government authorities, such as a residence permit or work permit, EDD must be performed, the account opening and relationship purpose must be explained and assessed for reasonableness, and the matter must be submitted by official memo to the AML/CFT responsible executive for approval before a business relationship may be established.
Note that even after approval, the customer's transactions must not involve prohibited countries.`,
      ja:`顧客が取引禁止国の国籍を有する場合、原則として取引禁止顧客に該当します。ただし、自然人が自国籍を取得している（国民身分証を保有する）場合は、顧客の保存情報および関連規程に基づき評価し、EDDを実施したうえで、部門主管の決裁後に取引を認めることができます。顧客が国内政府機関発行の書類（居留証、就労証等）を保有する場合も、EDDを実施し、口座開設および取引目的を説明して合理性を評価し、公文でAML/CFT専責主管の承認を得た後に業務関係を構築できます。
ただし、承認後であっても、当該顧客の取引は取引禁止国に関与してはなりません。`
    }
  },
  15:{
    q:{en:"If a customer's risk level changes from low/medium risk to high risk, is EDD required?",ja:"顧客リスク等級が低・中リスクから高リスクに変更された場合、EDDは必要ですか。"},
    a:{
      en:`Yes. If periodic review causes a customer's risk rating to change from medium or low risk to high risk, EDD must be performed for the customer and the customer risk rating change procedure must be followed.`,
      ja:`はい。定期審査により顧客リスク評価が中リスクまたは低リスクから高リスクへ変更された場合、当該顧客にEDDを実施し、顧客リスク評価変更手続に従って処理します。`
    }
  },
  16:{
    q:{en:"If a customer comes from a high ML/TF risk area, is EDD required?",ja:"顧客がマネロン・テロ資金供与高リスク地域に由来する場合、EDDは必要ですか。"},
    a:{
      en:`Yes. If the customer's nationality, current residence, legal-person registration place, or business location is in a high-risk country or region, or a jurisdiction under increased monitoring, as announced by FATF, EDD should be performed when establishing the business relationship and the information should be entered into the system.`,
      ja:`はい。顧客の国籍、現居住地、法人登録地または営業所在地がFATF公表の高リスク国・地域または強化監視国・地域に該当する場合、業務関係を構築する際にEDDを実施し、システムに登録します。`
    }
  },
  17:{
    q:{en:"Which industries are considered sensitive industries?",ja:"どの業種がセンシティブ業種に該当しますか。"},
    a:{
      en:`*Reconfirm: migrant worker remittance.
"Sensitive industries" include legal persons in the following industries and natural persons serving as senior executives in those industries:
- Gambling industry
- Arms industry, aircraft/ship manufacturing
- Dealers in high-value goods, such as diamonds, jewelry, precious metals, artwork, antiques, yachts, ships, and aircraft
- Pawnbrokers and private financing businesses
- Professional service providers, such as lawyers, accountants, notaries, and related firms
- Senior executives of virtual asset service providers (VASP)
- Non-profit organizations (NPOs) related to politics, religion, social welfare, or charity
- Real estate leasing and sales, and real estate brokers
- Embassies, consulates, and diplomatic units
- Manpower / foreign worker agencies
- Online game point issuers
- Third-party payment service providers
- Online lending platform operators (P2P operators).`,
      ja:`*再確認：移住労働者送金。
「センシティブ業種」には、以下の業種の法人および当該業種で高階主管職に就く自然人が含まれます。
- 賭博業
- 武器産業、航空機・船舶製造業
- 高額商品取扱業者（ダイヤモンド、宝飾品、貴金属、美術品、骨董品、ヨット、船舶、航空機等）
- 質屋および民間金融業者
- 専門サービス提供者（弁護士、会計士、公証人および関連事務所等）
- 仮想資産サービス業者（VASP）の高階主管
- 政治、宗教、社会福祉・慈善に関連する非営利組織（NPO）
- 不動産賃貸・売買業、不動産仲介業者
- 大使館、領事館、外交機関
- 人材（外国人労働者）仲介業者
- オンラインゲームポイント発行業者
- 第三者決済サービス業
- オンライン融資プラットフォーム業者（P2P業者）。`
    }
  },
  18:{
    q:{en:"Under Head Office rules, in what situations should establishing a business relationship or transaction be declined?",ja:"本部規定では、どのような場合に業務関係または取引の構築を謝絶すべきですか。"},
    a:{
      en:`A customer should be declined if any of the following applies:
- Suspected use of anonymous, false-name, nominee, fictitious-account, or fictitious legal-person/group accounts or insurance applications
- Agency facts or agent identity cannot be verified, or the customer refuses to provide documents required for identity review
- Use of forged or altered identity documents
- Only copies of identity documents are provided, unless permitted by law
- Documents or information provided are suspicious, unclear, or unverifiable
- Unjustified delay in supplementing documents
- The customer is a designated sanctioned person under the Counter-Terrorism Financing Act, a terrorist, or a terrorist organization
- Abnormal circumstances exist when establishing the relationship or transaction and no reasonable explanation can be provided
- Source of funds is suspected to involve corruption or misuse of public assets
- Prohibited customer
In addition, if customer identity verification cannot be completed, suspicious ML/TF transaction reporting related to the customer should be considered.`,
      ja:`顧客が次のいずれかに該当する場合、業務関係または取引の構築を謝絶します。
- 匿名、偽名、人頭、架空口座または架空法人・団体による口座開設または保険加入が疑われる
- 代理関係または代理人身分を確認できない、または顧客身分審査に必要な書類の提供を拒否する
- 偽造または変造された身分証明書類を使用する
- 法令で認められる場合を除き、身分証明書類の写しのみを提供する
- 提供書類・資料が疑わしい、不明瞭、または確認不能である
- 正当な理由なく補正書類の提出を遅延する
- テロ資金供与防止法上の指定制裁対象、テロリストまたはテロ組織である
- 業務関係または取引開始時に異常があり、合理的説明を提出できない
- 往来資金源が汚職または公共資産の濫用に由来する疑いがある
- 取引禁止顧客である
また、顧客身分確認手続を完了できない場合、当該顧客に関連する疑わしいマネロン・テロ資金供与取引の届出を検討します。`
    }
  },
  19:{
    q:{en:"If a customer matches a sanctions list, how should the Bank handle it?",ja:"顧客が制裁リストに該当した場合、銀行はどのように対応すべきですか。"},
    a:{
      en:`If the customer is confirmed as a sanctioned party, handling should depend on the type of sanctions.
If the customer is a sanctioned party under the Counter-Terrorism Financing Act:
1. Immediately review the customer's business relationships and transactions with the Bank, immediately freeze the customer's accounts and transactions, and notify the AML Department for coordination.
2. Prohibit any new or existing business relationships and approval of any transactions.
3. The AML Department must report to the Investigation Bureau, Ministry of Justice, within the statutory period.
If the customer is sanctioned under regimes other than the Counter-Terrorism Financing Act, including OFAC, EU, UN, or other foreign governments or international organizations:
1. Prohibit any new or existing business relationships and approval of any transactions.
2. The responsible unit or business unit should review the customer's transactions and, if suspicious, file a suspicious transaction report in accordance with the rules.`,
      ja:`顧客が制裁対象であることが確認された場合、制裁の種類に応じて処理します。
テロ資金供与防止法上の制裁対象に該当する場合：
1. 当行との業務関係および取引を直ちに確認し、顧客口座および取引を直ちに凍結するとともに、AML部門へ通報して調整する。
2. 新旧いずれの業務関係および取引承認も禁止する。
3. 法定期限内にAML部門から法務部調査局へ通報する。
テロ資金供与防止法以外の制裁対象（OFAC、EU、UN等の外国政府または国際組織の制裁対象を含む）の場合：
1. 新旧いずれの業務関係および取引承認も禁止する。
2. 権責部門または営業部門が顧客取引状況を確認し、疑わしい取引がある場合は規定に従って疑わしい取引届出を行う。`
    }
  },
  20:{
    q:{en:"Which customers are designated by the Bank as special-nature customers?",ja:"当行が指定する「特殊性質顧客」にはどのような顧客が含まれますか。"},
    a:{
      en:`Special-nature customers requiring particular attention include:
1. Politically exposed persons (PEP), their family members, and close associates (RCA)
2. Sensitive-industry customers
3. Customers from high ML/TF risk areas
4. Customers involved in crime, major adverse news, or adverse information
For these customers, the Bank should perform EDD and related control measures in accordance with the rules, in order to understand their identity, source of funds, relationship purpose, and transaction reasonableness.`,
      ja:`特に注意すべき特殊性質顧客には以下が含まれます。
1. 重要な政治的職務を有する者（PEP）、その家族および密接関係者（RCA）
2. センシティブ業種の顧客
3. マネロン・テロ資金供与高リスク地域に由来する顧客
4. 犯罪、重大なネガティブニュースまたは情報に関与する顧客
これらの顧客について、当行は規定に従いEDDおよび関連管理措置を実施し、その身分、資金源、取引目的および取引合理性を把握します。`
    }
  },
  21:{
    q:{en:"Which AML/CFT incidents must be reported immediately to Head Office / the parent bank?",ja:"どのAML/CFT事案を直ちに本部（親銀行）へ報告する必要がありますか。"},
    a:{
      en:`If an overseas branch or subsidiary experiences any of the following, it must immediately report verbally or in writing to the Head Office / parent bank AML Department:
1. Deficiencies, warnings, corrections, penalties, investigations, or administrative dispositions by competent authorities
2. Major legal or regulatory violations, or suspension/downgrade of rating
3. Failure, loss of function, or malfunction of management mechanisms or information systems
4. The institution, directors/supervisors, or employees are involved in ML/TF illegal activities
5. The institution, directors/supervisors, or employees are disclosed by media, the internet, or other sources as suspected of ML/TF illegal activities
If the report is made verbally, a written supplement must be completed within 7 business days.`,
      ja:`海外拠点で以下が発生した場合、直ちに口頭または書面で本部（親銀行）AML部門へ報告します。
1. 監督当局による指摘、警告、是正、処罰、調査または行政処分
2. 重大な法令違反、評価停止または格下げ
3. 管理メカニズムまたは情報システムの運用不能、機能喪失または故障
4. 機関、取締役・監査役または従業員がマネロン・テロ資金供与の違法行為に関与した場合
5. 機関、取締役・監査役または従業員がメディア・ネット等でマネロン・テロ資金供与の違法行為の疑いとして報じられた場合
口頭で報告した場合は、7営業日以内に書面補正を完了する必要があります。`
    }
  },
  22:{
    q:{en:"Must overseas branches use exactly the same list settings as Head Office?",ja:"海外拠点のリスト設定は本部と完全に同一でなければなりませんか。"},
    a:{
      en:`Not necessarily. The screening scope and fields for overseas branches should still be based on the actual businesses conducted by each overseas branch. In principle, parameter settings and selected screening lists should follow Head Office / parent bank requirements. However, overseas branches that have completed parameter adjustments based on third-party vendor validation results, or that use different AML systems, may configure settings according to local regulator requirements.
If an overseas branch intends to adopt settings different from Head Office / the parent bank, it should submit reasons, including but not limited to local regulations, regulator requirements, or actual business operations, and obtain approval or acknowledgment from the Head Office / parent bank AML/CFT responsible executive before implementation.`,
      ja:`必ずしも同一である必要はありません。海外拠点のリストスクリーニング範囲および項目は、各海外拠点が実際に取り扱う業務を基準とします。海外拠点のパラメータ設定および検核リストの選定は、原則として本部（親銀行）の規範に従います。ただし、第三者ベンダーの検証結果に基づきパラメータ調整を完了した海外拠点、または異なるAMLシステムを採用する海外拠点は、現地監督当局の要求に基づいて設定できます。
海外拠点が本部（親銀行）と異なる設定を採用しようとする場合、現地法令、監督当局要求、実際の業務状況等を含む理由を提出し、本部（親銀行）のAML/CFT専責主管の承認または備案を得た後に実施します。`
    }
  },
  23:{
    q:{en:"When the system generates an alert, what further review measures should be taken to confirm whether it is a true match?",ja:"システムがアラートを出した場合、真のヒットか確認するためにどのような追加確認を行いますか。"},
    a:{
      en:`After an AML system alert is generated, manual review should be used to collect and compare additional information. Review measures include:
1. If the list includes a photo, compare the listed photo with the customer.
2. Review or inquire about the customer's basic and background information to confirm whether it matches the list information.
3. Review relevant news about the listed party to determine whether the persons, events, time, place, and matters involved match or are related to the customer.`,
      ja:`AMLシステムでアラートが発生した後、手作業による確認手続を通じて追加情報を収集・照合し判断します。確認措置には以下が含まれます。
1. リストに写真がある場合、リスト写真と顧客本人が一致するか照合する。
2. 顧客の基本情報およびその他背景情報を確認または照会し、リスト記載情報と一致するか確認する。
3. リスト関連ニュースに含まれる人物、事実、時期、場所、物件等が顧客と一致または関連するか確認する。`
    }
  },
  24:{
    q:{en:"If it is learned that a customer may be involved in sanctions evasion and has higher risk, what control measures should be taken?",ja:"顧客が制裁回避に関与している疑いがあり、リスクが高いと判明した場合、どのような管理措置を講じますか。"},
    a:{
      en:`If it is learned that a customer may be involved in sanctions evasion and has higher risk, at least one of the following control measures should be adopted:
1. Enhanced due diligence
2. Higher transaction authorization and approval level
3. Increase the customer risk rating
4. Restrict transaction currencies
5. Restrict the scope of business relationships
6. Other control measures sufficient to mitigate sanctions risk`,
      ja:`顧客が制裁回避に関与している疑いがあり、リスクが高いと判明した場合、少なくとも以下のいずれかの管理措置を講じます。
1. 強化されたデューデリジェンス
2. 取引承認権限レベルの引き上げ
3. 顧客リスク評価の引き上げ
4. 取引通貨の制限
5. 取引業務範囲の制限
6. その他、制裁リスクを低減するに足る管理措置`
    }
  },
  25:{
    q:{en:"How should red-flag behavior related to sanctions be handled?",ja:"顧客にレッドフラッグ行為がある場合、どのように対応しますか。"},
    a:{
      en:`General red flags include the following patterns:
1. The customer refuses to provide important information, such as details on end users, expected end use, or company ownership.
2. Abnormal identity of transaction participants, such as a freight forwarder being listed as the product's end user.
3. Abnormal payment terms or methods, such as large cash payments or payment through a third country not involved in the transaction.
4. Use of shell companies, such as using a shell company for wire transfers involving a financial institution in a jurisdiction different from the company's registration place.
5. Goods do not match the customer's business scope or business nature.
6. Abnormal changes in ownership structure, such as share transfers before sanctions list updates, frequent equity transfers, frequent ownership changes, highly dispersed shareholding, or complex ownership arrangements.
7. Opaque company ownership information, such as a private company with no public disclosure obligation, formed in a secrecy or non-compliant jurisdiction, or located in a jurisdiction related to fund flows with sanctioned countries or regions.
8. Equity held through trusts or lawyers, such as ownership or control through a trust, or a law firm or lawyer acting as trustee or shareholder.
9. Company information is difficult to obtain or verify, such as cross-border wire transfers from a jurisdiction different from the company's registration place and inability to find beneficiary, founder, or company information online or in commercial databases.
10. Offshore companies or offshore assets are used to conceal information, such as incorporation in a high-secrecy jurisdiction to hide illicit proceeds or beneficial ownership, with registration information that is opaque and difficult to trace.
If these red flags are found, the relevant unit should conduct due diligence under Article 9. If the customer is assessed as involving sanctions evasion with higher risk, at least one risk control measure should be adopted.`,
      ja:`一般的なレッドフラッグには以下の態様があります。
1. 顧客が最終利用者、想定最終用途、会社所有権など重要情報の提供を拒否する。
2. 取引参加者の身分が異常である。例：貨物フォワーダーが製品の最終利用者として記載されている。
3. 支払条件または支払方法が異常である。例：大額現金支払、または取引に関与しない第三国経由での支払。
4. シェルカンパニーを利用して取引する。例：会社登録地と異なる法域の金融機関を介してシェルカンパニーが電信送金を行う。
5. 取引商品が顧客の営業項目または業務性質と明らかに一致しない。
6. 所有構造が異常に変動する。例：制裁リスト更新前の持分移転、頻繁な株式移転、頻繁な所有構造変更、過度に分散した株主構成、複雑な所有権安排。
7. 会社所有権情報が不透明である。例：非公開会社で開示義務がない、秘密性または不遵守法域に設立されている、制裁国・地域関連の資金流と関係する法域に所在する。
8. 信託または弁護士を通じて持分を保有する。例：信託を通じて実体を所有・支配する、または法律事務所・弁護士本人が受託者または株主となる。
9. 会社情報の取得または確認が困難である。例：会社登録地と異なる法域からクロスボーダー送金があり、ネットまたは商業データベースで受益者、発起人または会社関連情報を確認できない。
10. オフショア会社またはオフショア資産を利用して情報を隠蔽する。例：秘密性の高い法域に設立し、不法収益または受益者身分を隠し、登記情報が不透明で追跡困難である。
上記レッドフラッグを発見した場合、関連部門は第9条に基づきデューデリジェンスを実施します。顧客が制裁回避行為に関与しリスクが高いと評価される場合、少なくとも一つのリスク管理措置を講じます。`
    }
  },
  26:{
    q:{en:"What are the patterns of red flags for Russian sanctions evasion?",ja:"ロシア制裁回避に関するレッドフラッグの態様には何がありますか。"},
    a:{
      en:`Russian sanctions evasion red flags are summarized with reference to guidance issued by FinCEN, the U.S. Bureau of Industry and Security (BIS), the U.S. Treasury, the U.S. Department of Justice, and other agencies. Key patterns include:
1. Use of third countries or transshipment points to evade sanctions, including trade routes or transshipment points known to be used for exports to Russia or Belarus, or regular procurement/shipment through China (including Hong Kong and Macau), Armenia, Turkey, Uzbekistan, and similar locations.
2. Abnormal changes in transaction arrangements, such as sudden changes in counterparties or destinations for transactions originally planned for Russia, Belarus, or their companies, or last-minute changes to remitter, beneficiary, payment arrangements, or shipping instructions.
3. Opaque transaction-participant information, such as companies with almost no online presence, limited website information, no corporate email domain, or customers using personal rather than corporate email.
4. Refusal to provide transaction information, such as missing or refusing to provide end user, expected end use, bank, shipping, third-party, or ownership information.
5. Abnormal payment source or route, such as payment from an unrelated third country or third-party vendor, payment routed through a potential transshipment point, or last-minute payment by another country or company.
6. Abnormal consignee or end user, such as freight forwarders, logistics companies, mail centers, or financial institutions listed as final consignee, consignee, or end user, or consignee business that does not match the goods.
7. Abnormal shipping routes, including atypical product/destination routes, shipping corridors involving known transshipment countries, or luxury goods originally intended for Russia or Belarus being redirected to transshipment countries.
8. Goods inconsistent with the customer's business, such as products, software, or technology not matching the purchaser's business scope, or sudden customer involvement in defense, military, or dual-use goods.
9. Involvement of dual-use, high-tech, or export-controlled goods, such as bulk purchases of electronic components, electronic equipment, industrial products, other dual-use goods, or goods on the U.S. Commerce Control List (CCL) or EAR99.
10. Newly established or unusually fast-growing companies participating in transactions, such as companies established after February 24, 2022 engaging in defense or dual-use goods transactions, customers suddenly handling such exports, or significant increases in order volumes.
11. Links to sanctioned entities, such as common ownership, operating locations, addresses, or highly similar names with entities on the U.S. Commerce Department Entity List, Treasury SDN List, or other prohibited lists.
12. Links to Russian state-owned enterprises or sanctioned parties, such as common ownership, branches, subsidiaries, or shareholder relationships involving export-related transactions or services.
13. Abnormal addresses, contact information, or background data, such as addresses not matching actual operations, nonexistent or residential addresses, phone country codes inconsistent with destination countries, or customer IP addresses inconsistent with disclosed operating locations.
14. Abnormal transaction pricing, such as prices materially higher than known market prices.
15. Persons or companies previously violating export controls, such as a person convicted of U.S. export-control violations opening a new account or engaging in import/export transactions.`,
      ja:`ロシア制裁回避のレッドフラッグは、米国FinCEN、米国商務省産業安全保障局（BIS）、米国財務省、司法省等のガイダンスを参考に整理したもので、主な態様は以下のとおりです。
1. 第三国または積替地点を利用した制裁回避。例：ロシアまたはベラルーシ向け輸出に利用される既知の貿易ルートや積替地点を利用する、中国（香港・マカオを含む）、アルメニア、トルコ、ウズベキスタン等を通じて定期的に調達・輸送する。
2. 取引安排の異常変更。例：ロシア、ベラルーシまたはその企業向けに予定されていた出荷・支払先が突然変更される、送金人、受取人、支払安排または貨物指示が直前に変更される。
3. 取引参加者情報が不透明。例：ネット上の情報がほとんどない、ウェブサイト情報が限定的、会社ドメインのメールがない、顧客が会社メールではなく個人メールで取引する。
4. 顧客が取引情報の提供を拒否する。例：最終利用者、想定最終用途、銀行情報、貨物情報、第三者情報または会社所有権情報の欠落・拒否。
5. 支払元または経路の異常。例：取引と無関係の第三国または第三者業者から支払われる、潜在的な積替地点を経由して支払われる、当初の支払経路が直前に別国・別会社からの支払に変更される。
6. 荷受人または最終利用者の異常。例：貨物フォワーダー、物流会社、郵便センターまたは金融機関が最終荷受人・荷受人・最終利用者として記載される、荷受人の業務内容が商品の用途と一致しない。
7. 輸送ルートの異常。例：製品と目的地の組合せが非典型的、既知の積替国を含む海運ルート、ロシア・ベラルーシ向け予定の奢侈品が積替国へ変更される。
8. 商品が顧客業務と不一致。例：商品、ソフトウェアまたは技術が購入者の業務範囲と一致しない、顧客が突然防衛、軍事またはデュアルユース品関連取引を行う。
9. デュアルユース品、高科技貨品または輸出管理品に関与。例：電子部品、電子設備、工業製品その他デュアルユース品の大量購入、米国商務省CCLまたはEAR99品目に関する取引。
10. 新設または異常成長企業の取引参加。例：2022年2月24日以降設立企業が防衛・デュアルユース品取引を行う、従来関連輸出を行っていない顧客が突然当該取引を扱う、注文数が大幅増加する。
11. 制裁対象実体との関連。例：米国商務省Entity List、財務省SDN Listその他禁止リスト実体と共同所有、共同運営場所、共同住所または名称の高度類似がある。
12. ロシア国有企業または制裁対象との関連。例：会社または個人がロシア国有企業と共同所有、支店、子会社または株主関係を有し、輸出関連取引またはサービスに関与する。
13. 住所、連絡先または背景情報の異常。例：取引当事者住所が実際の営業地と一致しない、住所が存在しないまたは住宅住所、電話国番号が目的国と一致しない、顧客IPアドレスが開示営業地と一致しない。
14. 取引価格の異常。例：顧客支払価格が既知市場価格を明らかに上回る。
15. 輸出管理違反歴のある人物または会社に関与。例：米国輸出管理法違反で有罪となった個人が新規口座を開設し、または輸出入関連取引を行う。`
    }
  },
  27:{
    q:{en:"Which customers are classified as customers with Russian sanctions risk?",ja:"どのような顧客がロシア制裁リスク顧客に分類されますか。"},
    a:{
      en:`If the Bank identifies through competent authorities, association notices, or internal due diligence that a customer may involve Russian sanctions risk, and the AML/CFT responsible executive approves, the customer will be included on the Bank's watchlist of customers with Russian sanctions risk.
Possible circumstances include:
1. The customer's UBO has a Russian background, such as Russian nationality or geographic nexus.
2. The customer is involved in adverse media related to Russian economic sanctions.
3. The customer's behavior is suspected of involving red flags for Russian sanctions evasion mentioned in guidance issued by foreign governments or international organizations.
If any of the above applies and the AML Department assesses the risk as higher, the customer may be classified as having Russian sanctions risk.`,
      ja:`当行が監督当局、公会通知または内部デューデリジェンスを通じて、顧客がロシア制裁リスクに関与する可能性を把握し、AML/CFT専責主管の承認を得た場合、当行の「ロシア制裁リスク顧客」ウォッチリストに登録されます。
該当し得る状況は以下のとおりです。
1. 顧客のUBOがロシア背景（ロシア国籍または地域的関連性等）を有する。
2. 顧客がロシア経済制裁関連のネガティブメディアに関与している。
3. 顧客行為が、外国政府または国際組織のガイダンスに記載されたロシア制裁回避レッドフラッグに関与している疑いがある。
上記のいずれかに該当し、AML部門が関与リスクを高いと評価した場合、ロシア制裁リスク顧客に分類できます。`
    }
  },
  28:{
    q:{en:"If a customer conducts a transaction directly involving Russia, how should it be handled?",ja:"顧客がロシアに直接関係する取引を行う場合、どのように対応しますか。"},
    a:{
      en:`For transactions directly involving Russia, the Bank should comply with relevant sanctions regulations and conduct due diligence using a risk-based approach to confirm that the transaction does not violate those regulations.`,
      ja:`ロシアに直接関係する取引について、当行は関連制裁規定を遵守し、リスクベース・アプローチによりデューデリジェンスを実施し、当該取引が規定に違反しないことを確認します。`
    }
  },
  29:{
    q:{en:"Which transactions are considered possibly indirectly involving Russia, and how should they be handled?",ja:"どのような取引が「ロシアに間接的に関係する可能性のある取引」と認定され、その場合どのように対応しますか。"},
    a:{
      en:`If a customer has been listed as a customer with Russian sanctions risk and handles export proceeds-related transactions involving countries with high transshipment risk to Russia, the transaction is considered possibly indirectly involving Russia. Relevant transaction types include:
- Foreign inward remittance (T/T)
- Export letters of credit (L/C)
- Export documentary collections (D/P, D/A)
Countries with high transshipment risk to Russia refer to countries announced by U.S. FinCEN or domestic competent authorities, including association notices; see Appendix 3 of the International Sanctions Compliance Guidelines.
For transactions possibly indirectly involving Russia, the Bank should adopt the following control measures:
1. Obtain transaction documents, at least:
- Invoice
- Bill of Lading
Customer transaction information should also include HS CODE information.
2. Conduct goods-item checks to confirm whether the export goods are on:
- The list of high-tech goods exported to Russia and Belarus
- The dual-use goods and technology export control list and general military goods list
3. If the goods are on the high-tech goods list, obtain the following before handling:
- MOEA International Trade Administration undertaking letter for red-flag abnormal transaction checks
- If the undertaking letter cannot be provided, obtain a declaration and counterparty due diligence information (KYCC)
- If the destination is Russia, obtain a strategic high-tech goods export permit
4. If the goods are on the dual-use goods list, obtain the following before handling:
- Strategic high-tech goods export permit
- MOEA International Trade Administration undertaking letter
- If the undertaking letter cannot be provided, obtain a declaration and KYCC information
5. For advance receipts before export, inward remittance by customers with Russian sanctions risk should be released only after post-shipment transport documents are obtained and the above controls are completed. For long-standing customers with good credit, funds may be released within a controllable risk scope first, with post-shipment transport documents obtained through follow-up.`,
      ja:`顧客が「ロシア制裁リスク顧客」に指定され、ロシア向け積替高リスク国に関わる輸出代金関連取引を行う場合、「ロシアに間接的に関係する可能性のある取引」に該当します。関連取引類型には以下が含まれます。
- 国外からの被仕向送金（T/T）
- 輸出信用状（L/C）
- 輸出取立取引（D/P、D/A）
ロシア向け積替高リスク国とは、米国FinCENまたは国内主管機関（公会通知を含む）が公告した国を指します（「国際制裁遵循要点」別紙3参照）。
ロシアに間接的に関係する可能性のある取引について、当行は以下の管理措置を講じます。
1. 取引書類の取得。少なくとも以下を取得します。
- インボイス
- 船荷証券（Bill of Lading）
また、顧客提供の取引資料にはHS CODE情報を含める必要があります。
2. 商品品目の検核。輸出商品が以下に該当するか確認します。
- ロシアおよびベラルーシ向け高科技貨品リスト
- デュアルユース貨品・技術輸出管理リストおよび一般軍用品リスト
3. 商品が高科技貨品リストに該当する場合、取扱前に以下を取得します。
- 貿易署の誓約書（レッドフラッグリスト〈異常取引〉検核誓約書）
- 誓約書を提供できない場合は、声明書および取引相手方デューデリジェンス資料（KYCC）
- 貨物受取地がロシアの場合は、戦略性高科技貨品輸出許可証
4. 商品がデュアルユース貨品リストに該当する場合、取扱前に以下を取得します。
- 戦略性高科技貨品輸出許可証
- 貿易署誓約書
- 誓約書を提供できない場合は、声明書およびKYCC資料
5. 未輸出の前受金に該当する場合、ロシア制裁リスク顧客の前受金入金案件は、出荷後の運送書類を取得し、上記管理措置を完了した後に解付します。ただし、長期取引があり信用良好な顧客については、リスク管理可能な範囲で先に前受金を解付し、事後追跡により出荷後運送書類を取得できます。`
    }
  },
  30:{
    q:{en:"Which countries are high-risk countries for transshipment to Russia?",ja:"ロシア向け積替高リスク国にはどの国が含まれますか。"},
    a:{
      en:`High-risk countries for transshipment to Russia are mainly countries announced by U.S. FinCEN or domestic competent-authority letters, including association notices:
- Armenia (AM)
- Brazil (BR)
- China (CN)
- Georgia (GE)
- India (IN)
- Israel (IL)
- Kazakhstan (KZ)
- Kyrgyzstan (KG)
- Mexico (MX)
- Nicaragua (NI)
- Serbia (RS)
- Singapore (SG)
- South Africa (ZA)
- Tajikistan (TJ)
- Turkey (TR)
- United Arab Emirates (AE)
- Uzbekistan (UZ)
When transactions involve these 17 countries, check whether they may indirectly involve Russia, and handle document collection, HS CODE checks, and related risk controls under Article 16.`,
      ja:`ロシア向け積替高リスク国とは、主に米国FinCENまたは国内主管機関の来函（公会通知を含む）で公告された国を指し、以下が含まれます。
- アルメニア（AM）
- ブラジル（BR）
- 中国（CN）
- ジョージア（GE）
- インド（IN）
- イスラエル（IL）
- カザフスタン（KZ）
- キルギス（KG）
- メキシコ（MX）
- ニカラグア（NI）
- セルビア（RS）
- シンガポール（SG）
- 南アフリカ（ZA）
- タジキスタン（TJ）
- トルコ（TR）
- アラブ首長国連邦（AE）
- ウズベキスタン（UZ）
取引が上記17か国に関係する場合、「ロシアに間接的に関係する可能性のある取引」に該当するか留意し、第16条に従い書類取得、HS CODE検核および関連リスク管理措置を実施します。`
    }
  },
  31:{
    q:{en:"What voyage due diligence should be conducted for export financing transactions of customers with Russian sanctions risk?",ja:"ロシア制裁リスク顧客の輸出金融取引では、どのような航程デューデリジェンスを行いますか。"},
    a:{
      en:`For export financing transactions of customers with Russian sanctions risk, check whether the vessel exists, whether vessel type and characteristics match the goods, whether the vessel used for transport is on sanctions lists, whether the voyage matches transport documents, whether vessel nationality or voyage involves sanctioned countries or third places that may be used to evade sanctions, and whether the vessel owner or vessel UBO, including their country, is sanctioned by foreign governments or international organizations.`,
      ja:`ロシア制裁リスク顧客の輸出金融取引については、船舶が存続しているか、船舶の種類・特性が貨物属性と一致するか、輸送に使用する船舶が制裁リストに関与していないか、航程が運送書類の内容と一致するか、船籍または航程が制裁国または制裁回避の可能性がある第三地に関係するか、船舶所有者または船舶UBO（およびその国）が外国政府または国際組織の制裁対象でないかを検核します。`
    }
  },
  32:{
    q:{en:"How should the RCA of a PEP be determined?",ja:"PEPのRCAはどのように判定しますか。"},
    a:{
      en:`A close associate of a PEP (RCA) means a person with a close social or professional relationship with the PEP:
1. A partner in the same partnership as the PEP
2. A director, supervisor, or senior executive of the same company as the PEP
3. A person with a close business relationship with the PEP
4. An employee or employer of the PEP
5. A person employed by the employee in the preceding item or by a legal person represented by that employee
6. A borrower, guarantor, or collateral provider for the same debt as the PEP
7. A person acting on behalf of the PEP for cash transactions above the specified amount under Article 12, Paragraph 1 of the Money Laundering Control Act
8. A beneficial owner of the same legal person or trust as the PEP
9. A beneficial owner of a legal person or trust established for the benefit of the PEP
10. A person entrusted by the PEP to hold, manage, or use the PEP's assets or other interests
11. For a life insurance contract benefiting the PEP, the policyholder and insured
12. The responsible person of a people's association or labor union to which the PEP belongs`,
      ja:`PEPと密接な関係を有する者（RCA）とは、PEPと密接な社会的または職業上の関係を有する者をいいます。
1. PEPと同一パートナーシップのパートナー
2. PEPと同一会社の取締役、監査役または高階主管
3. PEPと密接な商業取引関係を有する者
4. PEPの被雇用者または雇用者
5. 前項の被雇用者またはその代表する法人に雇用される者
6. PEPと同一借入債務の借入人、保証人または担保提供者
7. PEPを代理してマネー・ローンダリング防止法第12条第1項の一定金額以上の現金取引を行う者
8. PEPと同一法人または信託の実質的支配者
9. PEPの利益のために設立された法人または信託の実質的支配者
10. PEPから委託を受け、その資産またはその他利益を保有、管理または運用する者
11. PEPを受益者とする生命保険契約の契約者および被保険者
12. PEPが所属する人民団体または労働組合の責任者`
    }
  },
  33:{
    q:{en:"What is the scope of PEP family members?",ja:"PEPの家族の範囲はどこまでですか。"},
    a:{
      en:`The family members of a politically exposed person include:
1. First-degree lineal blood relatives / relatives by marriage: parents, children, parents-in-law, daughters-in-law, and sons-in-law
2. Siblings
3. Spouse and the spouse's siblings
4. Cohabiting partner equivalent to a spouse`,
      ja:`重要な政治的職務を有する者の家族の範囲は以下のとおりです。
1. 一親等の直系血族・姻族：父母、子女、義父母、嫁、婿
2. 兄弟姉妹
3. 配偶者および配偶者の兄弟姉妹
4. 配偶者に相当する同居パートナー`
    }
  },
  34:{
    q:{en:"How should substantial influence be assessed for a PEP who left office more than one year ago?",ja:"離職または退任から1年を超えたPEPの実質的影響力はどのように判断しますか。"},
    a:{
      en:`Auxiliary factors for assessing substantial influence include:
I. Whether there has been active political news within one year, such as:
1. Participation in political-party activities, including running for office or campaigning for other candidates
2. Attendance at political or business elite events, including visits
3. Serving as government staff or consultant
4. Holding an important position in a political party, such as central standing committee member, local party chair, campaign headquarters director, or chief executive
II. Whether an RCA identified via Google search is a PEP:
1. Based on whether the RCA is current or left office within one year
2. First-degree lineal blood relatives: parents and children
3. First-degree relatives by marriage: parents-in-law, daughters-in-law, sons-in-law
4. Siblings
5. Spouse and spouse's siblings
III. Reference factors for comprehensive assessment:
1. The person was formerly a PEP and served for a long period
2. Continues to serve in government advisory roles, such as staff or consultant
3. Frequently appears at political/business social venues
4. Is described by media or relevant persons as an elder statesperson or influential political figure
5. The person's RCA is a current politician
6. Political family background
These criteria are references. Colleagues should still follow current rules and practical circumstances when identifying PEPs or RCAs.`,
      ja:`実質的影響力の補助判断要素には以下が含まれます。
一、1年以内に活発な政治ニュースがあるか。例：
1. 政党関連活動への参加（本人の立候補、または他候補者の応援）
2. 政財界要人の場への出席（訪問を含む）
3. 政府幕僚、顧問等への就任
4. 政党の重要職務（中央常務委員、党支部主任、選挙本部主任・総幹事等）への就任
二、Google検索で確認されたRCAがPEPかどうか。
1. RCAが現職または退任後1年以内かを基準とする
2. 一親等直系血族：父母、子女
3. 一親等姻族：義父母、嫁、婿
4. 兄弟姉妹
5. 配偶者および配偶者の兄弟姉妹
三、総合判断の参考基準。
1. 当該者が元PEPであり、任職期間が長い
2. 政府諮問職（幕僚、顧問等）を継続して務めている
3. 政財界要人の社交場に頻繁に出入りしている
4. メディア報道または関係者により政界の有力者とされている
5. 当該者のRCAが現職政治家である
6. 政治家系である
本判断基準は参考であり、同仁がPEPまたはRCAを識別する際は、現行規範および実務状況を基準とします。`
    }
  },
  35:{
    q:{en:"If the customer is a branch, representative office, or similar branch institution, how should the beneficial owner be identified?",ja:"顧客が支店・駐在員事務所等の分支機構である場合、実質的支配者はどのように識別しますか。"},
    a:{
      en:`Identify the beneficial owners of the head office, and also consider whether local managers, representatives, or similar persons have control over the customer and therefore are also beneficial owners.`,
      ja:`本社の実質的支配者を識別し、さらに現地の支配人、代表者等が顧客に対して支配権を有し、実質的支配者にも該当するかを考慮します。`
    }
  },
  36:{
    q:{en:"When identifying beneficial owners, if a customer's direct shareholder is not a natural person, how far should ownership tracing go?",ja:"実質的支配者を識別する際、顧客の直接株主が自然人でない場合、所有構造はどこまで遡って確認しますか。"},
    a:{
      en:`In principle, obtain shareholder registers and other information from the non-natural-person shareholder, confirm its ownership and control structure, and continue tracing upward until all natural persons who directly or indirectly hold 100% of the customer's equity are identified.
However, if it can be proven that a holder is an exempt entity, further ownership identification is not required and the tracing may be deemed to have reached a natural person endpoint.
In addition, if the disclosed direct and indirect shareholding information is sufficient to confirm the beneficial owners, and any undisclosed portion could not affect the UBO identification result even if supplemented, identification may be considered complete. For example, if one natural person is known to directly and indirectly hold 76% of a company, the remaining 24% generally does not need to be disclosed.`,
      ja:`原則として、当該自然人でない株主から株主名簿等の資料を取得し、その所有権および支配権構造を確認し、顧客持分を直接・間接に保有するすべて（100%）の自然人を特定するまで上位へ追跡します。
ただし、保有者が識別免除主体であることを証明できる場合、その所有権をさらに識別する必要はなく、自然人まで識別したものとみなすことができます。
また、既に開示された直接・間接持分情報で実質的支配者を確認するに足り、未開示部分を補足しても実質的支配者識別結果に影響し得ない場合、識別完了とみなすことができます。例：1名の自然人がある会社の76%持分を直接・間接に保有していることが判明している場合、残り24%は原則として開示不要です。`
    }
  },
  37:{
    q:{en:"If a related party of a customer is a prohibited customer of the Bank, may the Bank conduct business with the customer?",ja:"顧客の関係者が当行の取引禁止顧客である場合、当該顧客と取引できますか。"},
    a:{
      en:`In principle, no. If any related party of the customer falls into any category of prohibited customer of the Bank, the customer should be treated as a prohibited customer. Only if the related party has obtained domestic nationality or holds documents issued by domestic government authorities may dealings be approved after assessment, in accordance with Article 15, Paragraph 1, Subparagraph 1, Item 2.`,
      ja:`原則としてできません。顧客の関係者が当行の取引禁止顧客のいずれかの類型に該当する場合、当該顧客も取引禁止顧客とみなします。ただし、当該関係者が自国籍を取得している、または国内政府機関発行書類を保有している場合に限り、第15条第1項第1款第2目に従い評価後に取引を認めることができます。`
    }
  },
  38:{
    q:{en:"Who are included as a customer's related parties?",ja:"顧客の関係者には誰が含まれますか。"},
    a:{
      en:`Related parties include legal agents, persons authorized to control accounts, beneficial owners, responsible persons, legal persons represented by responsible persons, persons appointed by a legal person's responsible person, and senior management. If the customer is a trustee of a trust, related parties must include the settlor, trustee, trust supervisor, beneficiaries, and any other persons who can control the trust account.`,
      ja:`関係者には、法定代理人、口座を支配する権限を有する者、実質的支配者、責任者、責任者が代表する法人、法人責任者が指定する者、高階管理者等が含まれます。顧客が信託の受託者である場合、委託者、受託者、信託監察人、受益者および当該信託口座を支配できるその他の者を含める必要があります。`
    }
  },
  39:{
    q:{en:"For a customer that is a legal person, organization, or trustee of a trust, what written documents should be obtained to perform KYC properly?",ja:"顧客が法人、団体または信託の受託者である場合、KYCを適切に実施するためにどの書面を取得すべきですか。"},
    a:{
      en:`When the customer is a legal person, organization, or trustee of a trust, the Bank should understand its business nature, ownership, and control structure, and obtain at least the following information and documents:
Registration certificates, official documents or relevant certifications, government-issued business licenses, partnership agreements, trust instruments, certificates of incumbency, etc. Documents such as board meeting minutes, articles of association or similar governing documents, and financial statements should also be obtained to understand the customer's name and legal form. However, articles of association or similar governing documents may be inapplicable where:
A. The customer qualifies for exemption from UBO identification and verification and none of the Article 10, Subparagraph 4 circumstances exists.
B. The organization customer is confirmed not to have articles of association or similar governing documents.
Information on beneficial owners (UBO), including name, identification document number (ID), date of birth, nationality, service organization, and title.
Information on senior management, including directors, supervisors, board members, general manager, representative, manager, partners, or equivalent natural persons; name and nationality are mandatory. If screening produces a possible list match requiring further judgment, date of birth and other information should also be obtained as auxiliary information. If public information is sufficient to confirm the matter, birth information may be waived, but supporting records must be retained.
The customer's registered office address and principal place of business.
Information on controlling related entities of a legal-person customer, meaning legal persons that directly or indirectly hold more than 25% of the customer's shares or capital contribution.
Address verification documents, including customer bills, statements, or official documents, for address verification.`,
      ja:`顧客が法人、団体または信託の受託者である場合、当行はその業務性質、所有権および支配権構造を把握し、少なくとも以下の情報および書類を取得します。
登記証照、公文または関連証明書類、政府発行の営業許可証、パートナーシップ契約、信託文書、存続証明（Certification of Incumbency）等。また、名称および法的形式を把握するため、取締役会議事録、会社または信託の定款または類似権限文書、財務諸表等も取得します。ただし、定款または類似権限文書は以下の場合には適用されないことがあります。
A. 当該顧客の実質的支配者の識別および確認が不要で、かつ第10条第4款の事情がない場合。
B. 団体顧客について定款または類似権限文書がないことを確認した場合。
実質的支配者（UBO）に関する情報：氏名、身分証明書番号（ID）、生年月日、国籍、勤務機関および職称等。
高階管理職者に関する情報：取締役、監査役、理事、総経理、代表者、管理人、パートナーまたは相当職務の自然人。氏名および国籍は必須項目です。スクリーニングでリストへの疑似ヒットが発生し追加判断が必要な場合、生年月日等も補助情報として取得します。公開情報で確認できる場合は生年月日情報を省略できますが、裏付け資料を保存します。
顧客の登録事務所住所および主要営業所住所。
法人顧客の支配関連団体情報、すなわち当該顧客の株式（または出資額）を直接または間接に25%超保有する法人。
住所確認のための書類（顧客の請求書、取引明細書、公式発行書類等）。`
    }
  },
  40:{
    q:{en:"What should be done if local competent authorities or relevant organizations do not hold AML/CFT training?",ja:"現地主管機関または関連機関がAML/CFT研修を開催していない場合、どうすればよいですか。"},
    a:{
      en:`If local competent authorities or relevant organizations do not hold AML/CFT training courses, staff may attend internal or external training courses approved by the Head Office / parent bank AML/CFT responsible executive, including but not limited to periodic or ad hoc return-to-Taiwan training and exchanges, online courses, and similar programs.`,
      ja:`現地主管機関または関連機関がAML/CFT関連研修を開催していない場合、本部（親銀行）のAML/CFT専責主管が同意した内部または外部研修機関の研修を受講できます。これには、定期または不定期の台湾帰国研修・交流、オンライン講座等が含まれますが、これらに限られません。`
    }
  },
  41:{
    q:{en:"How many hours of AML/CFT training must overseas-branch AML/CFT supervising officers, managers, and dedicated personnel attend each year at minimum?",ja:"海外拠点のAML/CFT督導主管、主管および専責人員は、毎年少なくとも何時間のAML/CFT研修を受講すべきですか。"},
    a:{
      en:`AML/CFT supervising officers, managers, and dedicated personnel of overseas branches must attend at least 12 hours per year of AML/CFT training courses held by local competent authorities or relevant organizations.`,
      ja:`海外拠点のAML/CFT督導主管、主管および専責人員は、毎年少なくとも12時間、現地主管機関または関連機関が開催するAML/CFT研修を受講する必要があります。`
    }
  },
  42:{
    q:{en:"What is a shell company, and how should the Bank handle it if a customer is found to be one?",ja:"シェルカンパニーとは何ですか。顧客がシェルカンパニーであると判明した場合、どのように対応しますか。"},
    a:{
      en:`A shell company is a company that meets all three of the following conditions:
1. It has no physical presence in its place of registration.
2. It has no fixed business address, such as no registered address or no actual business premises or office supporting relevant business.
3. It does not maintain operating records at a fixed address.
If a customer is confirmed to be a shell company, the customer is a prohibited customer of the Bank. The AML Department should be notified immediately for coordination, and all business relationships should be stopped immediately.`,
      ja:`シェルカンパニーとは、以下三つの条件を同時に満たす会社をいいます。
1. 登録地に実体が存在しない。
2. 固定の営業住所がない（登録住所がない、または関連業務を実際に支援する営業所・事務所がない等）。
3. 固定住所で営業記録を維持していない。
顧客がシェルカンパニーであることが確認された場合、当行の取引禁止顧客に該当します。直ちにAML部門へ通報して調整し、すべての業務取引を直ちに停止します。`
    }
  },
  43:{
    q:{en:"Does exactly 25% shareholding count as beneficial ownership?",ja:"実質的支配者の持株比率がちょうど25%の場合も該当しますか。"},
    a:{
      en:`Yes. A 25% shareholding also qualifies as beneficial ownership. Direct and indirect holdings must also be considered together, such as shares controlled through holding companies or trusts.`,
      ja:`はい。25%ちょうどでも実質的支配者に該当します。また、持株会社や信託を通じて支配する株式など、直接持株と間接持株を併せて考慮する必要があります。`
    }
  },
  44:{
    q:{en:"The Bank generally classifies money services businesses (MSB) as prohibited customers. If an overseas branch or subsidiary has special business needs to open an account for such a customer, what signing and approval process is required?",ja:"当行は原則として現金サービス業者（MSB）を取引禁止顧客としています。海外支店・子会社が特別な業務上の必要によりこの類型の顧客の口座を開設する場合、どのような決裁・承認手続が必要ですか。"},
    a:{
      en:`The case must be submitted for individual discussion. After the AML Department reviews it through the internal approval process, it must be escalated to the AML/CFT responsible executive for approval before business dealings may proceed.`,
      ja:`個別案件として討議申請を行う必要があります。AML部門の会簽・確認を経た後、AML/CFT専責主管へ上申し承認を得てから、業務取引を行うことができます。`
    }
  },
  45:{
    q:{en:"If a business unit discovers during KYC that a customer is involved in serious crime or adverse news, but the system has not generated an alert, how should the customer's risk rating be increased?",ja:"営業部門がKYC過程で顧客の重大犯罪またはネガティブニュースを発見したものの、システムが警報を提示していない場合、どのようにリスク評価を引き上げますか。"},
    a:{
      en:`Relevant information should be compiled and submitted by official memo to the AML Department for comprehensive assessment. After approval by the AML/CFT responsible executive, the customer's risk rating should be increased, EDD should be re-performed for the customer, and the customer should be added to the Bank's internal watchlist.`,
      ja:`関連情報を取りまとめ、公文によりAML部門へ会簽し、顧客の関与状況を総合的に判断します。AML/CFT専責主管の承認後、当該顧客のリスク評価を引き上げ、顧客に対してEDDを再実施し、当該対象を当行の自建リストに登録します。`
    }
  },
  46:{
    q:{en:"Under what circumstances may a foreign company be exempted from beneficial owner identification?",ja:"どのような場合に外国会社は実質的支配者の識別を免除できますか。"},
    a:{
      en:`Foreign company entity types eligible for exemption include:
1. Foreign government agencies
2. Foreign-listed companies that, under the listing jurisdiction's rules, must disclose major shareholders, and subsidiaries of such listed companies
3. Financial institutions established outside Taiwan that apply FATF standards for AML/CFT, and investment vehicles managed by those financial institutions
Even if a foreign company falls into the above exempt categories, if any of the following occurs, the Bank must still identify its beneficial owner during identity verification and should not apply the exemption directly:
1. Bearer shares have been issued: if the company can issue bearer shares, it must be confirmed that all issued shares are registered shares before exemption applies. If it is a company with issued bearer shares, beneficial owners must be identified.
2. Registration in a high-risk country or region: the customer must not be registered in a high-risk country or region that has not adopted effective AML/CFT measures.
3. ML/TF suspicion: if there is sufficient suspicion that the customer, related parties, or transactions involve ML/TF, customer identity verification must be performed.`,
      ja:`免除が適用される外国会社の主体類型は以下のとおりです。
1. 外国政府機関
2. 海外上場地の規定により主要株主の開示が求められる上場・店頭会社、およびその子会社
3. 台湾域外に設立され、FATF基準に従ってAML/CFTを実施する金融機関、および当該金融機関が管理する投資ビークル
外国会社が上記の免除対象類型に該当しても、以下のいずれかが発生する場合、当行は顧客身分確認時に実質的支配者を識別し、免除規定を直ちに適用してはなりません。
1. 無記名株式を発行している場合：当該会社が無記名株式を発行できる場合、発行済株式すべてが記名式であることを確認して初めて免除できます。「発行済無記名株式の会社」に該当する場合は、実質的支配者を識別する必要があります。
2. 高リスク国・地域で登録されている場合：顧客は有効なAML/CFT措置を採っていない高リスク国・地域で登録されていてはなりません。
3. マネロンまたはテロ資金供与の疑いがある場合：顧客、関係者または取引がマネロン・テロ資金供与に関与していると疑うに足る場合、顧客身分確認を実施する必要があります。`
    }
  },
  47:{
    q:{en:"If a legal-person customer or an entity in its ownership structure has both voting and non-voting shares, how should shareholding ratios be calculated when identifying and verifying beneficial owners?",ja:"法人顧客またはその所有構造内の主体が「議決権株式」と「無議決権株式」を同時に有する場合、実質的支配者の識別・確認において持株比率はどのように計算しますか。"},
    a:{
      en:`Voting shares should be confirmed first. If a single natural person directly or indirectly holds more than 25% of the customer's voting shares, that person is the beneficial owner.`,
      ja:`まず「議決権株式」を確認します。そのうえで、単一の自然人が当該顧客の議決権株式を直接または間接に25%超保有している場合、その者が実質的支配者となります。`
    }
  },
  48:{
    q:{en:"If a legal-person customer holds treasury shares or indirectly holds its own shares, how should those shares be treated when drawing the ownership chart and calculating UBO shareholding?",ja:"法人顧客が「自己株式」または「自己を間接保有する株式」を有する場合、所有構造図の作成およびUBO持株比率計算では、この部分をどのように扱いますか。"},
    a:{
      en:`Because these shares are issued but not outstanding, they should not be included when calculating ownership percentages. In effect, they are treated as unissued and deducted from the total number of shares.`,
      ja:`この部分の株式は「発行済みだが流通していない」株式であるため、持株比率計算には含めません。つまり、未発行として扱い、総株数から控除します。`
    }
  },
  49:{
    q:{en:"When determining whether a customer has another controller, if a natural person has significant decision-making or veto rights by contract, articles, or actual circumstances, but is a lawyer, accountant, or court-appointed bankruptcy administrator, should they generally be treated as a controller? What is the exception?",ja:"顧客に「その他の支配権者」がいるか判断する際、契約、定款または実態により重大な決定権または拒否権を有する自然人が、弁護士、会計士または裁判所選任の破産管財人である場合、原則として支配権者と判定しますか。例外は何ですか。"},
    a:{
      en:`If the person is a dedicated professional service provider engaged by the customer, such as a practicing lawyer, practicing accountant, court-appointed bankruptcy administrator, employee-elected union representative, or a person appointed under the customer's original contract with a third party and having certain authority, the person may in principle be excluded from the controller assessment.
However, if the Bank gains deeper understanding and finds that the authority exercised by the professional service provider exceeds their ordinary function, the Bank should still consider including that person as a controller / beneficial owner.`,
      ja:`当該者が顧客に雇用または委任された専職サービス提供者（例：執業弁護士、執業会計士、裁判所選任の破産管財人、従業員選出の労働組合代表、または顧客が第三者と締結した既存契約に基づき指名され一定権限を有する者）に該当する場合、原則として支配権者の判断から除外できます。
ただし、銀行が詳細に把握した結果、当該専職サービス提供者が行使する権限が「通常の職能を超えている」と判明した場合、なお支配権者（実質的支配者）として判断対象に含めることを検討します。`
    }
  },
  50:{
    q:{en:"When a legal-person customer has no ultimate natural person directly or indirectly holding more than 25%, how should a natural person exercising control by other means be identified?",ja:"法人顧客に直接または間接の累計持株比率が25%超の最終自然人がいない場合、「その他の方法で顧客を支配する自然人」はどのように識別しますか。"},
    a:{
      en:`To determine whether a legal-person customer has another controller, conduct in-depth KYC using articles of association, partnership agreements, meeting minutes, customer statements, public information, reliable media reports, and similar sources to assess whether any natural person has one of the following key circumstances:
1. Absolute decision-making, voting, or veto rights: ability to decide or amend operating plans, including investment, donations, and transactions; change business nature, such as products sold; increase borrowings; appoint or remove the general manager; amend dividend or compensation policies; approve employee stock options; amend articles or partnership agreements; approve capital increases; dissolve the company; etc.
2. Personnel appointment/removal authority: authority to appoint or remove more than half of the directors, general partners, or responsible persons.
3. Control of key assets: holding intellectual property, key technology, key suppliers, or customers, giving influence over operations beyond formal authority.
4. Shadow director: nominally only an ordinary director, but regularly influences decisions and has final decision-making power.
5. Strong voting influence: holding 25% or less but having strong influence over other shareholders' or partners' votes, such as a founder or main operator of a family business; or multiple shareholders jointly controlling voting rights through written agreements.
6. Substantive control through contract or relationship: for example, shares registered under children but actually controlled by parents, or ownership below the threshold but control obtained through a trust agreement.
If a person meeting the above conditions is a lawyer, accountant, bankruptcy administrator, union representative, or other professional service provider, they should in principle be excluded from controller status unless the authority they exercise exceeds their ordinary function.`,
      ja:`法人顧客に「その他の支配権者」がいるかを判定するには、深度あるKYCを通じて、定款、パートナーシップ契約、会議記録、顧客の説明、公開情報または信頼できるメディア報道等から、自然人が以下の重点事情のいずれかを有するか評価します。
1. 絶対的な決定権、議決権または拒否権：事業計画（投資、寄付、取引等を含む）の決定・変更、事業性質の変更（販売商品等）、借入増加、総経理の任免、配当・報酬政策の変更、従業員ストックオプションへの同意、定款・パートナーシップ契約の変更、増資承認、会社解散等を決定できる。
2. 人事任免権：取締役、普通パートナーまたは責任者の過半数を任免する権限を有する。
3. 重要資産の掌握：知的財産権、重要技術、重要サプライヤーまたは顧客を掌握し、運営に対して形式的権限を超える影響力を有する。
4. 「影の取締役」に該当：名義上は一般取締役にすぎないが、常態的に意思決定に影響し、最終決定権を有する。
5. 強い議決影響力：持株比率が25%以下でも、他の株主・パートナーの投票に強い影響力を有する創業者または家族企業の主要経営者である、または複数株主が書面合意により議決権を共同支配している。
6. 契約または関係による実質支配：例として、株式が子女名義で登録されているが実際には父母が支配している、または所有比率が基準未満でも信託契約により支配権を取得している。
ただし、上記条件に該当する者が弁護士、会計士、破産管財人、労働組合代表等の専職サービス提供者である場合、原則として支配権者から除外します。ただし、その行使する権限が通常職能を超える場合はこの限りではありません。`
    }
  }
};

function translateReferenceText(text, lang){
  if(!text) return "";
  const documentNames = {
    "客戶洗錢與資恐風險評估暨審查細則":{
      en:"Customer ML/TF Risk Assessment and Review Rules",
      ja:"顧客のマネロン・テロ資金供与リスク評価・審査細則"
    },
    "國外分支機構防制洗錢及打擊資恐管理細則":{
      en:"Overseas Branch AML/CFT Management Rules",
      ja:"海外拠点AML/CFT管理細則"
    },
    "客戶及交易有關對象之姓名及名稱檢核暨測試程序作業規則":{
      en:"Name Screening and Testing Procedure Rules for Customers and Transaction-Related Parties",
      ja:"顧客および取引関連対象者の氏名・名称検核およびテスト手続規則"
    },
    "國際制裁遵循要點":{
      en:"International Sanctions Compliance Guidelines",
      ja:"国際制裁遵循要点"
    }
  };
  const terms = lang === "ja"
    ? {"第":"第","條":"条","項":"項","款":"款","目":"目","附件":"別紙","附錄":"付録","、":"、","修訂":"改訂"}
    : {"第":"Article ","條":"","項":" Paragraph ","款":" Subparagraph ","目":" Item ","附件":"Appendix ","附錄":"Appendix ","、":", ","修訂":"revised"};

  let next = text;
  Object.entries(documentNames).forEach(([zh, translated]) => {
    next = next.replaceAll(zh, translated[lang]);
  });
  Object.entries(terms).forEach(([zh, translated]) => {
    next = next.replaceAll(zh, translated);
  });
  if(lang === "en" || lang === "ja"){
    const numerals = {"一":"1","二":"2","三":"3","四":"4","五":"5","六":"6","七":"7","八":"8","九":"9","十":"10"};
    Object.entries(numerals).forEach(([zh, translated]) => {
      next = next.replaceAll(zh, translated);
    });
  }
  return next;
}

Object.entries(FAQ_TRANSLATIONS).forEach(([sourceNo, value]) => {
  value.ref = value.ref || {};
});

Object.entries(FAQ_TRANSLATIONS).forEach(([sourceNo, value]) => {
  if(/^\d+$/.test(sourceNo)){
    FAQ_TRANSLATIONS["FAQ-"+String(sourceNo).padStart(3,"0")] = value;
  }
});

function applyReferenceTranslationsToDb(db){
  Object.values(db || {}).forEach(biz => {
    Object.values(biz.aspects || {}).forEach(aspect => {
      Object.values(aspect.topics || {}).forEach(topic => {
        (topic.questions || []).forEach(question => {
          const sourceNo = String(question.sourceNo || "");
          const translated = FAQ_TRANSLATIONS[sourceNo];
          if(!translated) return;
          translated.ref.en = translated.ref.en || translateReferenceText(question.ref?.zh || "", "en");
          translated.ref.ja = translated.ref.ja || translateReferenceText(question.ref?.zh || "", "ja");
          ["q","a","ref"].forEach(field => {
            question[field] = {
              ...(question[field] || {}),
              ...(translated[field] || {})
            };
          });
        });
      });
    });
  });
}

if(typeof DB !== "undefined"){
  applyReferenceTranslationsToDb(DB);
}
